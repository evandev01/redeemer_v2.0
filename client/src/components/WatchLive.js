import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream-container'>
        {/* THIS WEEKS SERVICE ========== */}
        <Container>
          <Row id='live-border' className='p-5' />
          <Row id='stream-player' className='justify-content-center pb-5'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
              <iframe
                id='player'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/9DkUlNlc0jY'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='true'
              ></iframe>
            </Col>
          </Row>
        </Container>
        {/* LAST WEEKS SERVICE ========== */}
        <Container>
          <Row id='live-border' className='p-5' />
          <Row id='stream-player' className='justify-content-center pb-5'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
              <iframe
                id='player'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/HA1b5CopiCc'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='true'
              ></iframe>
            </Col>
          </Row>
        </Container>
        <Row id='live-border' className='p-5' />
      </Container>
    </Fragment>
  )
}

export default WatchLive
