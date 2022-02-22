import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listSundays, updateSunday } from '../actions/sunday'
import { listWednesdays, updateWednesday } from '../actions/wednesday'
import { SUNDAY_UPDATE_RESET } from '../constants/sunday'
import { WED_UPDATE_RESET } from '../constants/wednesday'

// Sun 2/20
// https://www.youtube.com/embed/Ds2yPPDcBLc
// Sun 2/13
// https://www.youtube.com/embed/ihr4KhgMPrM

// Wed 2/16
// https://www.youtube.com/embed/z9Pm_PxXe2g

// Wed 2/9
// https://www.youtube.com/embed/ocfQ_ctmo9c

const WatchLive = () => {
  const [sundayURL, setSundayURL] = useState('')
  const [wednesdayURL, setWednesdayURL] = useState('')

  const dispatch = useDispatch()

  // Sunday Redux
  // List
  const sundayList = useSelector(state => state.sundayList)
  const { loading: loadingSundays, error: errorSundays, sundays } = sundayList
  // Update
  const sundayUpdate = useSelector(state => state.sundayUpdate)
  const {
    loading: loadingUpdateSun,
    success: successUpdateSun,
    error: errorUpdateSun,
  } = sundayUpdate

  // Wednesday Redux
  const wedList = useSelector(state => state.wedList)
  const {
    loading: loadingWednesdays,
    error: errorWednesdays,
    wednesdays,
  } = wedList

  const wedUpdate = useSelector(state => state.wedUpdate)
  const {
    loading: loadingUpdateWed,
    success: successUpdateWed,
    error: errorUpdateWed,
  } = wedUpdate

  const clearForm = () => {
    setSundayURL('')
    setWednesdayURL('')
  }

  useEffect(() => {
    if (successUpdateSun) {
      dispatch({ type: SUNDAY_UPDATE_RESET })
      clearForm()
    } else if (successUpdateWed) {
      dispatch({ type: WED_UPDATE_RESET })
      clearForm()
    } else {
      dispatch(listSundays())
      dispatch(listWednesdays())
    }
  }, [dispatch, successUpdateSun, successUpdateWed])

  return (
    <>
      <Container id='stream-container'>
        {/* ==>| SUNDAY SERVICE |<== */}
        <Container>
          {loadingSundays ? (
            <Loader />
          ) : errorSundays ? (
            <Message variant='danger'>{errorSundays}</Message>
          ) : (
            sundays &&
            sundays.map((sunday, index) => (
              <Fragment key={index}>
                <Row id='stream-player' className='justify-content-center'>
                  <Col md='auto' />
                  <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
                    <iframe
                      id='player'
                      width='560'
                      height='315'
                      src={sunday.embedURL}
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen='true'
                    ></iframe>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>YouTube Embed Key</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Sunday embed URL'
                          onChange={e => setSundayURL(e.target.value)}
                          value={sundayURL}
                        />
                      </Form.Group>
                      <Button
                        id='updateSunday'
                        onClick={e => {
                          e.preventDefault()
                          dispatch(
                            updateSunday({
                              _id: sunday._id,
                              embedURL: sundayURL,
                            })
                          )
                        }}
                        variant='success'
                        type='submit'
                      >
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Fragment>
            ))
          )}
        </Container>
        <Row id='live-border' />

        {/* ==>| WEDNESDAY SERVICE |<== */}
        <Container>
          {loadingWednesdays ? (
            <Loader />
          ) : errorWednesdays ? (
            <Message variant='danger'>{errorWednesdays}</Message>
          ) : (
            wednesdays &&
            wednesdays.map((wednesday, index) => (
              <Fragment key={index}>
                <Row id='stream-player' className='justify-content-center'>
                  <Col md='auto' />
                  <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
                    <iframe
                      id='player'
                      width='560'
                      height='315'
                      src={wednesday.embedURL}
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen='true'
                    ></iframe>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>YouTube Embed Key</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Sunday embed URL'
                          onChange={e => setWednesdayURL(e.target.value)}
                          value={wednesdayURL}
                        />
                      </Form.Group>
                      <Button
                        id='updateSunday'
                        onClick={e => {
                          e.preventDefault()
                          dispatch(
                            updateWednesday({
                              _id: wednesday._id,
                              embedURL: wednesdayURL,
                            })
                          )
                        }}
                        variant='success'
                        type='submit'
                      >
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Fragment>
            ))
          )}
        </Container>
      </Container>
    </>
  )
}

export default WatchLive
