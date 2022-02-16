import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'

const WatchLive = () => {
  const h5Style = {
    color: 'rgba(0, 0, 0, 0.685)',
    // fontSize: 'large',
    // fontWeight: 'none',
    // textDecoration: 'underline',
  }
  return (
    <Fragment>
      <Container id='stream-container'>
        {/* SUNDAY SERVICE */}
        <Row id='live-border' />
        <Container>
          <Row>
            <Col className='text-center'>
              <h5 style={h5Style}>Sunday Service</h5>
            </Col>
          </Row>
          <Row id='stream-player' className='justify-content-center'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
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
        </Container>
        <Row id='live-border' />

        {/* WEDNESDAY SERVICE */}
        <Container>
          <Row>
            <Col className='text-center'>
              <h5 style={h5Style}>Wednesday Service</h5>
            </Col>
          </Row>
          <Row id='stream-player' className='justify-content-center'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
              <iframe
                id='player'
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
        </Container>
        <Row id='live-border' />
      </Container>
    </Fragment>
  )
}

export default WatchLive
