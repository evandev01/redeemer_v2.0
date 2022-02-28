import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { updateEvent, listEventDetails } from '../../actions/event'
import { EVENT_UPDATE_RESET } from '../../constants/event'

const EventEdit = () => {
  const { id } = useParams()
  const eventId = id
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const eventDetails = useSelector(state => state.eventDetails)
  const { loading, error, event } = eventDetails

  const eventUpdate = useSelector(state => state.eventUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = eventUpdate

  useEffect(() => {
    if (eventId) {
      dispatch(listEventDetails(eventId))
    }
    if (successUpdate) {
      dispatch({ type: EVENT_UPDATE_RESET })
      navigate('/event')
    }
  }, [dispatch, navigate, successUpdate, eventId])

  const uploadFileHandler = async e => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.log(error)
      setUploading(false)
    }
  }

  const clearForm = () => {
    setTitle('')
    setLine1('')
    setLine2('')
    setDesc('')
    setImage('')
  }

  const submitHandler = e => {
    e.preventDefault()
    const updatedEvent = {
      _id: eventId,
      title: title,
      line1: line1,
      line2: line2,
      desc: desc,
      image: image,
    }
    dispatch(updateEvent(updatedEvent))
    clearForm()
  }

  return (
    <div>
      {loading || (loadingUpdate && <Loader />)}
      {error ||
        (errorUpdate && (
          <Message variant='danger'>{error ? error : errorUpdate}</Message>
        ))}

      <Container className='p-5'>
        <Row>
          <Col xs={1} sm='auto' md={3} />
          <Col xs={10} sm={12} md={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='title' className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={event ? event.title : title}
                  required={true}
                  value={title}
                  onClick={() => (event ? setTitle(event.title) : setTitle(''))}
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='line1' className='mb-3'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='text'
                  required={true}
                  placeholder={event ? event.line1 : line1}
                  value={line1}
                  onClick={() => event && setLine1(event.line1)}
                  onChange={e => setLine1(e.target.value)}
                />
                <Form.Text>
                  Examples:
                  <br />
                  1: -February-
                  <br />
                  2: June 26th, 2022
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='line2' className='mb-3'>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={event ? event.line2 : line2}
                  value={line2}
                  onClick={() => event && setLine2(event.line2)}
                  onChange={e => setLine2(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='desc' className='mb-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  required={true}
                  placeholder={event ? event.desc : desc}
                  value={desc}
                  onClick={() => event && setDesc(event.desc)}
                  onChange={e => setDesc(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='image' className='mb-3'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={event ? event.image : image}
                  value={image}
                  onChange={e => setImage(e.target.value)}
                ></Form.Control>

                <Form.Group controlId='formFile' className='mt-3 mb-3'>
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type='file' onChange={uploadFileHandler} />
                </Form.Group>
                {uploading && <Loader />}
              </Form.Group>
              <Button type='submit' variant='primary'>
                Save
              </Button>
            </Form>
          </Col>
          <Col xs={1} sm='auto' md={3} />
        </Row>
      </Container>
    </div>
  )
}

export default EventEdit
