import React, { Fragment } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Church from '../assets/church/church.jpg'
import Joel from '../assets/joel/joel_600x800.jpg'
import Watch from '../assets/icons/video-icon.jpg'
import YouTube from '../assets/icons/youtube-logo2.png'

const Home = () => {
  return (
    <Fragment>
      <Container id='home-body' className='mt-5'>
        <Row id='home-border' />

        <Row className='text-center'>
          <Col className='text-center mt-5'>
            <h2 className='mb-4'>Proclaiming the gospel of Jesus Christ</h2>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col md={6} className='text-center'>
            <Image id='joel' src={Joel} className='ml-3'></Image>
          </Col>
          <Col>
            <p id='hebrew-home' className='text-left mt-3'>
              "so that at the name of Jesus every knee will bow in heaven and on
              earth and every tongue will confess that Jesus Christ is Lord, to
              the glory of God the Father."
              <br />
              (Phillippians 2:10)
            </p>
            <h6 className=' text-left mt-5 ml-1'>Join us for service!</h6>
            <p id='hebrew-home' className='text-left mt-3 ml-1'>
              Sunday: 10:00am <br />
              Wednesday: 6:30pm
              <br />
              Location: <br />
              5417 IN-10 <br />
              DeMotte, IN 46310
            </p>
          </Col>
        </Row>

        <Row id='home-border' />

        <Row className='text-center mt-3'>
          <Col lg={4}>
            <Image
              className='py-3'
              src={Church}
              alt='Wednesday night service'
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h6 id='lol-h6' className='text-center'>
              End Time Truths to encourage our hearts.
            </h6>
            <p className='text-center'>
              <strong>Wednesday at 6:30pm</strong>
              <br />
              We welcome each one to come and study the Bible with us.
            </p>
          </Col>
        </Row>

        <Row id='home-border' className='pt-4' />

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
            <h4 className='mb-3'>Sermons Streaming Live Now!</h4>
            <p>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='home-border' className='pt-4' />
      </Container>
    </Fragment>
  )
}

export default Home
