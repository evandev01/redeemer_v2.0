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
        <Container>
          <Row id='stream-player' className='justify-content-center'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
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
          <Row id='stream-player' className='justify-content-center'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
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
        {/* <Row id='live-border' /> */}
      </Container>
    </Fragment>
  )
}

export default WatchLive
