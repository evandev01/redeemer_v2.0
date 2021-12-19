import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Church from '../assets/church/church.jpg'
import Joel from '../assets/joel/joel_600x800.jpg'
import Watch from '../assets/icons/video-icon.png'
import YouTube from '../assets/icons/youtube-logo2.png'

const Home = () => {
  return (
    <>
      <Container id='home-body' className='mt-5'>
        <Row className='text-center'>
          <Col className='text-left mb-3'>
            <h3 className='mb-4'>Proclaiming the gospel of Jesus Christ</h3>
          </Col>
        </Row>

        {/* Begin content */}
        <Row>
          <Col md={1} />
          <Col md={5} className='text-right'>
            <Image id='joel' src={Joel}></Image>
          </Col>
          <Col md={5} className='text-left'>
            <h5 id='hebrew-home' className='text-left mt-3'>
              "so that at the name of Jesus every knee will bow in heaven and on
              earth and every tongue will confess that Jesus Christ is Lord, to
              the glory of God the Father."
              <br />
              (Phillippians 2:10)
            </h5>
            <h5 className=' text-left mt-5 ml-1'>Join us for service!</h5>
            <h5 id='hebrew-home' className='text-left mt-3 ml-1'>
              Sunday: 10:00am <br />
              Wednesday: 6:30pm
              <br />
              Location: <br />
              5417 IN-10 <br />
              DeMotte, IN 46310
            </h5>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='live-border' />

        <Row className='mt-3'>
          <Col md={1} />
          <Col md={5} className='text-right'>
            <Image id='church' src={Church} alt='Wednesday night service' />
          </Col>
          <Col md={5} className='text-left'>
            <h5 id='lol-h5' className='text-center'>
              End Time Truths to encourage our hearts.
            </h5>
            <h5 className='text-center'>
              <strong>Wednesday at 6:30pm</strong>
              <br />
              We welcome each one to come and study the Bible with us.
            </h5>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='live-border' className='pt-4' />

        <Row className='text-center mt-5'>
          <Col md={1} />
          <Col md={5}>
            <Image
              className='mb-3'
              id='watch'
              src={Watch}
              alt='Watch live sermons'
            />
          </Col>

          <Col md={5}>
            <Row>
              <h5 className='mb-3'>Sermons Streaming Live Now!</h5>

              <Row>
                <h5>Click here</h5>
                <br />
                <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                  <Image id='youtube' src={YouTube} alt='YouTube logo' />
                </a>
              </Row>
              <Row>
                <h5>
                  <br />
                  and subscribe to our channel!
                </h5>
              </Row>
            </Row>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='live-border' className='pt-4' />
      </Container>
    </>
  )
}

export default Home
