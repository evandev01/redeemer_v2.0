import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { listEvents } from '../../actions/event'
import { EVENT_UPDATE_RESET } from '../../constants/event'

const Event = () => {
  const [tier, setTier] = useState(0)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const eventList = useSelector(state => state.eventList)
  const { loading, error, events } = eventList

  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch])

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Row id='live-border' />

      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {events &&
        events
          .sort((a, b) => {
            return a.tier - b.tier
          })
          .map((event, i) => (
            <div key={i}>
              <Row className='mt-5'>
                <Col
                  id='events-col'
                  className='text-center'
                  xs={12}
                  sm={12}
                  lg={6}
                >
                  <Image
                    id='events-graphic'
                    alt={event.title}
                    src={event.image}
                  />
                </Col>
                <Col xs={12} sm={12} lg={6} className='text-center'>
                  <h3>{event.title}</h3>
                  <p>
                    <strong>{event.line1}</strong>
                    <br />
                    <strong>{event.line2}</strong>
                    <br />
                    <strong>{event.desc}</strong>
                    <br />
                    <strong>Tier: {event.tier}</strong>
                  </p>
                </Col>
              </Row>
              {userInfo && (
                <Link to={`/event/edit/${event._id}`}>
                  <Row>
                    <Col className='text-center'>
                      <Button className='text-center' variant='primary'>
                        Edit
                      </Button>
                    </Col>
                  </Row>
                </Link>
              )}
              <Row id='live-border' />
            </div>
          ))}
    </div>
  )
}

export default Event
