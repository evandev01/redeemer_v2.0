import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, Button } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { createEvent, updateEvent } from '../actions/event'
import { EVENT_CREATE_RESET } from '../constants/event'

const EventModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const eventCreate = useSelector(state => state.eventCreate)
  const { loading, error, success } = eventCreate

  const eventList = useSelector(state => state.eventList)
  const { loading: loadingList, error: errorList, events } = eventList

  useEffect(() => {
    if (success) {
      dispatch({ type: EVENT_CREATE_RESET })
    }
  }, [dispatch, success])

  const tierHandler = () => {
    if (events) {
      events.map(event =>
        dispatch(
          updateEvent({
            _id: event._id,
            title: event.title,
            line1: event.line1,
            line2: event.line2,
            desc: event.desc,
            image: event.image,
            tier: event.tier + 1,
          })
        )
      )
    }
  }

  const clearForm = () => {
    setTitle('')
    setLine1('')
    setLine2('')
    setDesc('')
    setImage('')
  }

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

  const submitHandler = e => {
    e.preventDefault()
    tierHandler()
    const newEvent = {
      title: title,
      line1: line1,
      line2: line2,
      desc: desc,
      image: image,
    }
    dispatch(createEvent(newEvent))
    clearForm()
    handleClose()
  }

  return (
    <>
      {loadingList || (loading && <Loader />)}
      {error ||
        (errorList && (
          <Message variant='danger'>{error ? error : errorList}</Message>
        ))}
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title' className='mb-3'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder={'Enter Title'}
                required={true}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='line1' className='mb-3'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='text'
                required={true}
                placeholder={'Enter Date'}
                value={line1}
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
                placeholder={'Enter Time'}
                value={line2}
                onChange={e => setLine2(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='desc' className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                required={true}
                placeholder={'Enter dexcription'}
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='image' className='mb-3'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder={'Enter Image URL'}
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={submitHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EventModal
