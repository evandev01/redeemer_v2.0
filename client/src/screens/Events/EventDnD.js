import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'
import { listEvents, updateEvent, deleteEvent } from '../../actions/event'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const EventDnD = () => {
  const [eventsArr, setEventsArr] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const eventList = useSelector(state => state.eventList)
  const { loading, error, events } = eventList

  const eventUpdate = useSelector(state => state.eventUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = eventUpdate

  const handleOnDragEnd = async result => {
    if (!result.destination) return
    const items = Array.from(events)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    const dIndex = result.destination.index
    const sIndex = result.source.index
    const dest = events.filter(event => event.tier === dIndex)
    const source = events.filter(event => event.tier === sIndex)
    const others = events.filter(
      event => event.tier !== dIndex && event.tier !== sIndex
    )

    const noTouchLess = events.filter(
      event => event.tier > sIndex && event.tier < dIndex
    )

    const noTouchGreater = events.filter(
      event => event.tier < sIndex && event.tier > dIndex
    )

    const dEvent = dest[0]
    const sEvent = source[0]

    const updateTiers = () => {
      if (noTouchGreater.length !== 0) {
        noTouchGreater.map(event => {
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
        })
      }
      //////////
      else if (noTouchLess.length !== 0) {
        noTouchLess.map(event => {
          console.log({ _id: event._id, tier: event.tier })
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
        })
      }

      dispatch(
        updateEvent({
          _id: sEvent._id,
          title: sEvent.title,
          line1: sEvent.line1,
          line2: sEvent.line2,
          desc: sEvent.desc,
          desc2: sEvent.desc2,
          image: sEvent.image,
          tier: dIndex,
        })
      )
    }
    await updateTiers()
  }

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      dispatch(listEvents())
    }
  }, [dispatch, userInfo, successUpdate])

  return (
    <div>
      <Row id='live-border' />
      {loading || (loadingUpdate && <Loader />)}
      {error ||
        (errorUpdate && (
          <Message variant='danger'>{error ? error : errorUpdate}</Message>
        ))}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='pictures'>
          {provided => (
            <Container
              style={{ maxWidth: '50vw' }}
              className='events'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {events &&
                events
                  .sort((a, b) => {
                    return a.tier - b.tier
                  })
                  .map((event, i) => {
                    return (
                      <Draggable
                        key={event._id}
                        draggableId={event._id}
                        index={i}
                      >
                        {provided => (
                          <div id='container-div'>
                            <Row
                              className='mt-5'
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Col
                                xs={12}
                                sm={1}
                                md={1}
                                lg={2}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <i
                                  style={{
                                    padding: '10px',
                                  }}
                                  className='fa-solid fa-grip mr-5'
                                ></i>
                              </Col>
                              <Col
                                id='events-col'
                                className='text-center'
                                xs={12}
                                sm={4}
                                md={4}
                                lg={4}
                              >
                                <Image
                                  id='events-order-graphic'
                                  alt={event.title}
                                  src={event.image}
                                />
                              </Col>
                              <Col
                                xs={12}
                                sm={3}
                                md={3}
                                lg={3}
                                className='text-center'
                              >
                                <h5>{event.title}</h5>
                                <p>Tier: {event.tier}</p>
                              </Col>
                            </Row>
                            <Row id='live-border' />
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
      <Row>
        <Col className='text-center m-2 p-2'>
          <Link to='/events'>
            <Button>Done</Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default EventDnD
