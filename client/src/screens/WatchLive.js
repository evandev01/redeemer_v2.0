import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listSundays, updateSunday } from '../actions/sunday'
import { listWednesdays, updateWednesday } from '../actions/wednesday'
import { SUNDAY_UPDATE_RESET } from '../constants/sunday'
import { WED_UPDATE_RESET } from '../constants/wednesday'

const WatchLive = () => {
  const [sundayURL, setSundayURL] = useState('')
  const [wednesdayURL, setWednesdayURL] = useState('')

  const dispatch = useDispatch()

  // Sunday Redux
  const sundayList = useSelector(state => state.sundayList)
  const { loading: loadingSundays, error: errorSundays, sundays } = sundayList

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

  // User Info
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

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
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Row id='live-border' />

      {/* EASTER SERVICE */}
      <Row id='stream-player' className='justify-content-center'>
        <Col md='auto' />
        <Col xs={12} className='text-center m-3 py-3'>
          <iframe
            id='player'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/z8fDSz2mvHY'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen='true'
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className='text-center m-3'>
          <h3>Easter Service</h3>
        </Col>
      </Row>
      <Row id='live-border' />

      {/* SUNDAY SERVICE */}
      {loadingSundays || loadingUpdateSun ? (
        <Loader />
      ) : errorSundays ? (
        <Message variant='danger'>{errorSundays}</Message>
      ) : errorUpdateSun ? (
        <Message variant='danger'>{errorUpdateSun}</Message>
      ) : (
        sundays &&
        sundays.map((sunday, index) => (
          <Fragment key={index}>
            <Row id='stream-player' className='justify-content-center'>
              <Col md='auto' />
              <Col xs={12} className='text-center m-3 py-3'>
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
              <Col className='text-center m-3'>
                <h3>Sunday</h3>
              </Col>
            </Row>
            {userInfo && userInfo !== null && (
              <Row className='p-5'>
                <Col>
                  <Form>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>YouTube Embed Key</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Embed URL'
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
                      type='submit'
                    >
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            )}
          </Fragment>
        ))
      )}
      <Row id='live-border' />

      {/* WEDNESDAY SERVICE */}
      <Row id='stream-player' className='justify-content-center'>
        {loadingWednesdays || loadingUpdateWed ? (
          <Loader />
        ) : errorWednesdays ? (
          <Message variant='danger'>{errorWednesdays}</Message>
        ) : errorUpdateWed ? (
          <Message variant='danger'>{errorUpdateWed}</Message>
        ) : (
          wednesdays &&
          wednesdays.map((wednesday, index) => (
            <Fragment key={index}>
              <Row id='stream-player' className='justify-content-center'>
                <Col xs={12} className='text-center m-3 py-3'>
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
                <Col className='text-center m-3'>
                  <h3>Wednesday</h3>
                </Col>
              </Row>
              {userInfo && userInfo !== null && (
                <Row className='p-5'>
                  <Col>
                    <Form>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>YouTube Embed Key</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Embed URL'
                          onChange={e => setWednesdayURL(e.target.value)}
                          value={wednesdayURL}
                        />
                      </Form.Group>
                      <Button
                        id='updateWednesday'
                        onClick={e => {
                          e.preventDefault()
                          dispatch(
                            updateWednesday({
                              _id: wednesday._id,
                              embedURL: wednesdayURL,
                            })
                          )
                        }}
                        type='submit'
                      >
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              )}
            </Fragment>
          ))
        )}
      </Row>
    </div>
  )
}

export default WatchLive
