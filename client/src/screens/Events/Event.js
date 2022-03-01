import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import EventModal from '../../components/EventModal'
import { listEvents, deleteEvent } from '../../actions/event'
import '../../index.css'

const Event = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const eventList = useSelector(state => state.eventList)
  const { loading, error, events } = eventList

  const eventCreate = useSelector(state => state.eventCreate)
  const { success: successCreate } = eventCreate

  const eventDelete = useSelector(state => state.eventDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = eventDelete

  const eventUpdate = useSelector(state => state.eventUpdate)
  const { success: successUpdate } = eventUpdate

  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch, successDelete, successUpdate, successCreate])

  const deleteHandler = (e, id) => {
    e.preventDefault()
    dispatch(deleteEvent(id))
  }

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Row>
        <Col className='text-center'>
          <Button onClick={handleShow}>Create New</Button>
        </Col>
      </Row>
      <Row id='live-border' />

      {loading || (loadingDelete && <Loader />)}
      {error ||
        (errorDelete && (
          <Message variant='danger'>{error ? error : errorDelete}</Message>
        ))}

      {show && <EventModal show={show} handleClose={handleClose} />}

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
                <Row>
                  <Col className='text-end'>
                    <Link to={`/event/edit/${event._id}`}>
                      <Button className='text-center m-1' variant='primary'>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      className='text-center  m-1'
                      variant='primary'
                      onClick={e => deleteHandler(e, event._id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              )}
              <Row id='live-border' />
            </div>
          ))}
    </div>
  )
}

export default Event
