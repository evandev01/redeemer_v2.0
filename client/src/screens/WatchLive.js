import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream-container'>
        {/* THIS WEEKS SERVICE ========== */}
        <Container>
          <Row id='stream-player' className='justify-content-center'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
              <iframe
                id='player'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/OtrcW-Qpffg'
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
          <Row id='live-border' />
          <Row id='stream-player' className='justify-content-center'>
            <Col md='auto' />
            <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
              <iframe
                id='player'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/vF0oRcbcYlU'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen='true'
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  )
}

export default WatchLive