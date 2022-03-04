import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import EventModal from '../../components/EventModal'
import { listEvents, deleteEvent, updateEvent } from '../../actions/event'
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
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = eventUpdate

  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch, successDelete, successUpdate, successCreate])

  const deleteHandler = async (e, deletedEvent, id) => {
    e.preventDefault()
    const dTier = deletedEvent.tier

    // Filter all events with a tier greater than the deleted tier and update tiers - 1
    // This ensures that there will always be a tier 0 and no gaps in the tier numbers
    const tEvents = events.filter(event => event.tier > dTier)

    const updateTiers = () => {
      tEvents.map(event =>
        dispatch(
          updateEvent({
            _id: event._id,
            title: event.title,
            line1: event.line1,
            line2: event.line2,
            desc: event.desc,
            desc2: event.desc2,
            image: event.image,
            tier: event.tier - 1,
          })
        )
      )
    }
    await updateTiers()
    dispatch(deleteEvent(id))
  }

  const upHandler = async (e, event, i) => {
    e.preventDefault()
    await events.forEach((data, index) => {
      if (index === i - 1) {
        dispatch(
          updateEvent({
            _id: data._id,
            title: data.title,
            line1: data.line1,
            line2: data.line2,
            desc: data.desc,
            desc2: data.desc2,
            image: data.image,
            tier: data.tier + 1,
          })
        )
      }
    })
    dispatch(
      updateEvent({
        _id: event._id,
        title: event.title,
        line1: event.line1,
        line2: event.line2,
        desc: event.desc,
        desc2: event.desc2,
        image: event.image,
        tier: event.tier - 1,
      })
    )
  }

  const downHandler = async (e, event, i) => {
    e.preventDefault()
    await events.forEach((data, index) => {
      if (index === i + 1) {
        dispatch(
          updateEvent({
            _id: data._id,
            title: data.title,
            line1: data.line1,
            line2: data.line2,
            desc: data.desc,
            desc2: data.desc2,
            image: data.image,
            tier: data.tier - 1,
          })
        )
      }
    })
    dispatch(
      updateEvent({
        _id: event._id,
        title: event.title,
        line1: event.line1,
        line2: event.line2,
        desc: event.desc,
        desc2: event.desc2,
        image: event.image,
        tier: event.tier + 1,
      })
    )
  }

  return (
    <div id='container-div'>
      {loading && <Loader />}
      {loadingUpdate && <Loader />}
      {loadingDelete && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      <Row id='live-border' />

      {userInfo && (
        <>
          <Row>
            <Col className='text-center'>
              <Button onClick={handleShow}>
                <i className='fa-solid fa-circle-plus' /> Create New
              </Button>
            </Col>
          </Row>
          <Row id='live-border' />
        </>
      )}

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
                    {event.line2 && (
                      <>
                        <strong>{event.line2}</strong>
                        <br />
                      </>
                    )}
                    {event.desc && (
                      <>
                        <strong>{event.desc}</strong>
                        <br />
                      </>
                    )}
                    {event.desc2 && (
                      <>
                        <span>{event.desc2}</span>
                        <br />
                      </>
                    )}
                  </p>
                </Col>
              </Row>
              {userInfo && (
                <Row>
                  <Col className='text-center'>
                    <Button
                      disabled={i === 0}
                      className='px-3 m-3'
                      onClick={e => upHandler(e, event, i)}
                    >
                      <i class='fa-solid fa-angle-up'></i> Move Up
                    </Button>
                  </Col>
                  <Col className='text-center'>
                    <Button
                      disabled={i === events.length - 1}
                      className='px-3 m-3'
                      onClick={e => downHandler(e, event, i)}
                    >
                      Move Down <i class='fa-solid fa-angle-down'></i>
                    </Button>
                  </Col>
                  <Col className='text-center'>
                    <Link to={`/event/edit/${event._id}`}>
                      <Button className='px-3 m-3' variant='warning'>
                        <i className='fa-solid fa-pen-to-square' /> Edit
                      </Button>
                    </Link>
                  </Col>
                  <Col className='text-center'>
                    <Button
                      className='px-3 m-3'
                      variant='danger'
                      onClick={e => deleteHandler(e, event, event._id)}
                    >
                      <i className='fa-solid fa-trash-can' /> Delete
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
