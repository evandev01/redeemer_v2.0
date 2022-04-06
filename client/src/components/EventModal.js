import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { storage } from '../firebase/config'
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
  const [desc2, setDesc2] = useState('')
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState(null)
  const [imageError, setImageError] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const eventCreate = useSelector(state => state.eventCreate)
  const { loading, error, success } = eventCreate

  const eventList = useSelector(state => state.eventList)
  const { loading: loadingList, error: errorList, events } = eventList

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
    if (success) {
      dispatch({ type: EVENT_CREATE_RESET })
    }
  }, [dispatch, navigate, userInfo, success])

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
            desc2: event.desc2,
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
    setDesc2('')
    setUrl('')
  }

  const types = ['image/png', 'image/jpeg', 'image/jpg']

  const changeHandler = async e => {
    e.preventDefault()
    const file = e.target.files[0]
    if (file && types.includes(file.type)) {
      await uploadFileHandler(file)
    }
  }

  const uploadFileHandler = file => {
    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      snapshot => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )

        setProgress(prog)
      },
      err => setImageError(err),
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(url => setUrl(url))
      }
    )
  }

  const submitHandler = async e => {
    e.preventDefault()
    await tierHandler()
    const newEvent = {
      title: title,
      line1: line1,
      line2: line2,
      desc: desc,
      desc2: desc2,
      image: url,
    }
    dispatch(createEvent(newEvent))
    clearForm()
    handleClose()
  }

  return (
    <>
      {loading && <Loader />}
      {loadingList && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {errorList && <Message variant='danger'>{errorList}</Message>}

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                as='textarea'
                rows={2}
                placeholder={'Enter description'}
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='desc2' className='mb-3'>
              <Form.Label>Description 2</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
                placeholder={'Enter description'}
                value={desc2}
                onChange={e => setDesc2(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='image' className='mb-3'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder={'Enter Image URL'}
                value={url}
                onChange={e => setUrl(e.target.value)}
              ></Form.Control>

              <>
                <Form.Group controlId='formFile' className='mt-3 mb-3'>
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type='file' onChange={changeHandler} />
                </Form.Group>

                <>
                  <div
                    className='progress-bar'
                    style={{ width: progress + '%' }}
                  />
                  <h5>{progress}%</h5>
                </>
                {imageError && <Message variant='danger'>{imageError}</Message>}
                {progress === 100 && <h5>Image uploaded.</h5>}
              </>
            </Form.Group>
            <Modal.Footer>
              <Button type='submit' onClick={submitHandler} variant='primary'>
                Save
              </Button>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EventModal
