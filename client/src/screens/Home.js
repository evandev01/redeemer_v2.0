import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Footer from '../components/Footer'
import Church from '../assets/church/church.jpg'
import Joel from '../assets/joel/joel_600x800.jpg'
import Watch from '../assets/icons/video-icon.png'
import YouTube from '../assets/icons/youtube-logo2.png'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Row id='live-border' />
      <Row className='text-center'>
        <Col className='text-center p-3'>
          <h3 style={{ fontSize: '1.5em' }}>
            Proclaiming the gospel of Jesus Christ!
          </h3>
        </Col>
      </Row>

      <Row className='text-center'>
        <Col sm={12} lg={6} className='text-center'>
          <Image className='text-center' id='joel' src={Joel}></Image>
        </Col>
        <Col sm={12} lg={6} className='p-3'>
          <p className='text-left'>
            "so that at the name of Jesus every knee will bow in heaven and on
            earth and every tongue will confess that Jesus Christ is Lord, to
            the glory of God the Father."
            <br />
            (Phillippians 2:10)
          </p>

          <h3>Join us for service!</h3>
          <p>
            Sunday: 10:00am <br />
            Wednesday: 6:30pm
            <br />
            <br />
            Location: <br />
            <a href='https://www.google.com/maps/place/5417+IN-10,+De+Motte,+IN+46310/@41.1441656,-87.2869983,16z/data=!4m5!3m4!1s0x8812196950e82fd5:0xda907da34fcb744c!8m2!3d41.1441014!4d-87.2871268?hl=en'>
              5417 IN-10 <br />
              DeMotte, IN 46310
            </a>
          </p>
          <iframe
            title='maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.561140018221!2d-87.28931548434966!3d41.144105419003814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812196950e82fd5%3A0xda907da34fcb744c!2s5417%20IN-10%2C%20De%20Motte%2C%20IN%2046310!5e0!3m2!1sen!2sus!4v1645139354873!5m2!1sen!2sus'
            style={{
              maxWidth: '80vw',
              maxHeight: '80vw',
              width: '100%',
              height: 'auto',
              padding: '20px 0',
              margin: '20px 0',
              border: '0',
              allowfullscreen: '',
              loading: 'lazy',
            }}
          ></iframe>
        </Col>
      </Row>

      <Row id='live-border' />

      <Row>
        <Col className='text-center'>
          <Image id='graphic' src={Church} alt='Wednesday night service' />
        </Col>
        <Col className='text-left' style={{ padding: '20px' }}>
          <h3>We welcome each one to come and study the Bible with us.</h3>
          <p>
            Please gather with us and be impacted one verse at a time from{' '}
            <a href='https://www.bible.com/bible/114/PSA.119.NKJV'>
              Psalms 119!
            </a>
          </p>
          <h3>Wednesday at 6:30pm</h3>
        </Col>
      </Row>

      <Row id='live-border' className='pt-4' />

      <Row>
        <Col sm={12} md={6} className='text-center'>
          <Image id='icon' src={Watch} alt='Watch live sermons' />
        </Col>

        <Col sm={12} md={6} className='text-center'>
          <Row>
            <h5>Sermons Streaming Live Now!</h5>

            <Row>
              <h5>Click here</h5>
              <br />
              <a
                href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'
                target='_blank'
                rel='noreferrer'
              >
                <Image id='icon' src={YouTube} alt='YouTube logo' />
              </a>
            </Row>
            <Row>
              <h5>and subscribe to our channel!</h5>
            </Row>
          </Row>
        </Col>
      </Row>

      <Row id='live-border' />

      <Footer />
    </div>
  )
}

export default Home
