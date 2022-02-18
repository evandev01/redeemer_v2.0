import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../index.css'

const WatchLive = () => {
  return (
    // <Container id='player-container'>
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Row id='live-border' />
      {/* SUNDAY SERVICE */}
      <Row id='stream-player' className='justify-content-center'>
        <Col xs={12} className='text-center m-3 py-3'>
          <iframe
            id='player'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/ihr4KhgMPrM'
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
      <Row id='live-border' />

      {/* WEDNESDAY SERVICE */}
      <Row id='stream-player' className='justify-content-center'>
        <Col xs={12} className='text-center m-3 py-3'>
          <iframe
            id='player'
            title='live stream player'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/z9Pm_PxXe2g'
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
      <Row id='live-border' />
    </div>
  )
}

export default WatchLive
