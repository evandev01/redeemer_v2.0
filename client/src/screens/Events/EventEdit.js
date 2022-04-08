import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import {
  updateEvent,
  listEventDetails,
  createEvent,
  listEvents,
} from '../../actions/event'
import { EVENT_UPDATE_RESET, EVENT_CREATE_RESET } from '../../constants/event'

const EventEdit = () => {
  const { id } = useParams()
  const eventId = id
  const navigate = useNavigate()
  let myRef = React.createRef()

  const [title, setTitle] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [desc, setDesc] = useState('')
  const [desc2, setDesc2] = useState('')
  const [url, setUrl] = useState('')
  const [imageError, setImageError] = useState(null)
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState('')

  const dispatch = useDispatch()

  const eventDetails = useSelector(state => state.eventDetails)
  const { loading, success: successDetails, error, event } = eventDetails

  const eventUpdate = useSelector(state => state.eventUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = eventUpdate

  const eventCreate = useSelector(state => state.eventCreate)
  const {
    loading: loadingCreate,
    success: successCreate,
    error: errorCreate,
  } = eventCreate

  const eventList = useSelector(state => state.eventList)
  const { events } = eventList

  const titleFromStorage = localStorage.getItem('title')
  const line1FromStorage = localStorage.getItem('line1')
  const line2FromStorage = localStorage.getItem('line2')
  const descFromStorage = localStorage.getItem('desc')
  const desc2FromStorage = localStorage.getItem('desc2')
  const imageFromStorage = localStorage.getItem('image')

  const resetHandler = e => {
    e.preventDefault()
    if (eventId && event) {
      if (imageFromStorage) {
        localStorage.removeItem('image')
      }
      setTitle(event && event.title)
      setLine1(event && event.line1)
      setLine2(event && event.line2)
      setDesc(event && event.desc)
      setDesc2(event && event.desc2)
      if (event && event.image !== '') {
        setUrl(event.image)
        setProgress(100)
      } else {
        setUrl('')
        setProgress(0)
        myRef.current.value = ''
      }
    }
  }
  useEffect(() => {
    if (!eventId) {
      dispatch(listEvents())
    }
    if (eventId) {
      dispatch(listEventDetails(eventId))
    }
    if (successUpdate) {
      dispatch({ type: EVENT_UPDATE_RESET })
      navigate('/events')
    }
    if (successCreate) {
      dispatch({ type: EVENT_CREATE_RESET })
      navigate('/events')
    }

    if (titleFromStorage) {
      setTitle(titleFromStorage)
    } else setTitle('')
    if (line1FromStorage) {
      setLine1(line1FromStorage)
    } else setLine1('')
    if (line2FromStorage) {
      setLine2(line2FromStorage)
    } else setLine2('')
    if (descFromStorage) {
      setDesc(descFromStorage)
    } else setDesc('')
    if (desc2FromStorage) {
      setDesc2(desc2FromStorage)
    } else setDesc2('')
    if (imageFromStorage) {
      setUrl(imageFromStorage)
      setProgress(100)
    } else setImage('')

    // if (successDetails){
    //   setTitle('')
    //   setLine1('')
    //   setLine2('')
    //   setDesc('')
    //   setDesc2('')
    //   setUrl(imageFromStorage)
    // }
  }, [
    dispatch,
    navigate,
    successUpdate,
    successCreate,
    successDetails,
    eventId,
    titleFromStorage,
    line1FromStorage,
    line2FromStorage,
    descFromStorage,
    desc2FromStorage,
    imageFromStorage,
  ])

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
    setUrl('')
    setDesc2('')
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

  const removeLocalStorage = () => {
    if (titleFromStorage) {
      localStorage.removeItem('title')
    }
    if (line1FromStorage) {
      localStorage.removeItem('line1')
    }
    if (line2FromStorage) {
      localStorage.removeItem('line2')
    }
    if (descFromStorage) {
      localStorage.removeItem('desc')
    }
    if (desc2FromStorage) {
      localStorage.removeItem('desc2')
    }
    if (imageFromStorage) {
      localStorage.removeItem('image')
    }
  }
  const submitHandler = async e => {
    e.preventDefault()

    if (event && eventId) {
      const updatedEvent = {
        _id: eventId,
        title: title,
        line1: line1,
        line2: line2,
        desc: desc,
        desc2: desc2,
        image: url,
        tier: event.tier,
      }
      dispatch(updateEvent(updatedEvent))
      removeLocalStorage()
      clearForm()
    } else {
      await tierHandler()
      const newEvent = {
        title,
        line1,
        line2,
        desc,
        desc2,
        image: url,
      }
      dispatch(createEvent(newEvent))
      removeLocalStorage()
      clearForm()
    }
  }

  const [isActive, setIsActive] = useState(false)
  return (
    <div id='container-div'>
      <Row id='live-border' />
      {loading && <Loader />}
      {loadingUpdate && <Loader />}
      {loadingCreate && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      <Container className='p-5'>
        <Row>
          <Col xs={1} sm='auto' md={3} />
          <Col xs={10} sm={12} md={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='title' className='mb-4 text-center'>
                <Form.Label style={{ fontWeight: 'bold' }}>Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={'Enter Title'}
                  // onClick={setTitle(event && event.title)}
                  required={true}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='line1' className='mb-4 text-center'>
                <Form.Label style={{ fontWeight: 'bold' }}>Date</Form.Label>
                <Form.Control
                  type='text'
                  required={true}
                  placeholder={'Enter Date'}
                  value={line1}
                  onChange={e => setLine1(e.target.value)}
                />
                <Form.Text>Date may be any format.</Form.Text>
                <br />
              </Form.Group>

              <Form.Group controlId='line2' className='mb-4 text-center'>
                <Form.Label style={{ fontWeight: 'bold' }}>Time</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={'Enter Time'}
                  value={line2}
                  onChange={e => setLine2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='desc' className='mb-4 text-center'>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  Description
                </Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder={'Enter Description'}
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='desc' className='mb-4 text-center'>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  Description 2
                </Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder={'Enter Description'}
                  value={desc2}
                  onChange={e => setDesc2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='image' className='mb-4 text-center'>
                <Form.Label style={{ fontWeight: 'bold' }}>Image</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={
                    'Enter text' !== null || '' ? image : 'Enter Image URL'
                  }
                  value={url ? url : image ? image : ''}
                  onChange={e => setUrl(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId='formFile'
                className='mt-3 mb-3 text-center'
              >
                <Form.Label style={{ fontWeight: 'bold' }}>
                  Upload Image
                </Form.Label>
                <Form.Control
                  type='file'
                  ref={myRef}
                  onChange={changeHandler}
                />{' '}
                <Row>
                  <Col className='flex-start'>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={
                        <Tooltip>
                          Click to view and choose from currently stored images.
                        </Tooltip>
                      }
                    >
                      <Button
                        variant='secondary'
                        onClick={e => {
                          e.preventDefault()
                          if (title !== '') {
                            localStorage.setItem('title', title)
                          }
                          if (line1 !== '') {
                            localStorage.setItem('line1', line1)
                          }
                          if (line2 !== '') {
                            localStorage.setItem('line2', line2)
                          }
                          if (desc !== '') {
                            localStorage.setItem('desc', desc)
                          }
                          if (desc2 !== '') {
                            localStorage.setItem('desc2', desc2)
                          }
                          navigate('/images')
                        }}
                      >
                        Choose from Images
                      </Button>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </Form.Group>

              <div className='progress-bar' style={{ width: progress + '%' }} />
              {imageError && <Message variant='danger'>{imageError}</Message>}
              {progress === 100 && <h5>Image uploaded.</h5>}
              <h5>{progress}%</h5>

              <div id='live-border' />

              <Row>
                <Col>
                  <Button
                    type='submit'
                    variant='warning'
                    className='py-3 m-1'
                    style={{ width: '100px' }}
                  >
                    Save
                  </Button>
                </Col>
                {event && eventId && (
                  <Col className='text-end'>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={
                        <Tooltip>
                          Click to set all fields to original values.
                        </Tooltip>
                      }
                    >
                      <Button
                        className='py-3 m-1'
                        onClick={e => resetHandler(e)}
                        style={{ width: '100px' }}
                      >
                        <i className='fa-solid fa-arrow-rotate-left' /> Reset
                      </Button>
                    </OverlayTrigger>
                  </Col>
                )}
              </Row>
            </Form>
          </Col>
          <Col xs={1} sm='auto' md={3} />
        </Row>
      </Container>
    </div>
  )
}

export default EventEdit
