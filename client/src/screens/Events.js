import React, { Fragment } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import Shoebox from '../assets/events/shoebox.jpg'
import FoodDrive from '../assets/events/food_drive.png'
import Bible from '../assets/events/Bible.jpg'
// import Parents from '../assets/events/parents.png'
// import Church from '../assets/church/church.jpg'
// import Watch from '../assets/icons/video-icon.jpg'
// import YouTube from '../assets/icons/youtube-logo2.png'

const Events = () => {
  return (
    <Fragment>
      <Container id='events-container'>
        {/* MENS BIBLE STUDY */}
        <Row className='text-center m-3 p-3'>
          <Col lg={4}>
            <Image
              id='shadow'
              className='py-3'
              src={Bible}
              alt="Men's Bible Study"
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h3 className='text-center'>Mens Bible Study</h3>
            <p style={{ fontSize: 'large' }} className='text-center'>
              <strong>- Saturday Mornings -</strong>
              <br />
              <strong>7:00am - 8:30am</strong> through{' '}
              <strong>March 12th</strong>
            </p>
          </Col>
        </Row>

        <Row id='live-border' />

        {/* FOOD DRIVE */}
        <Row className='text-center m-3 p-3'>
          <Col lg={4}>
            <Image
              id='shadow'
              className='py-3'
              src={FoodDrive}
              alt='Food drive'
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h3 className='text-center'>Food Drive</h3>
            <p id='events-text' className='text-center'>
              <strong>- February -</strong>
              <br />
              Items: <strong>RICE</strong> and <strong>BEANS</strong>
              <br />
              (Please look for 2023 expirations)
            </p>
          </Col>
        </Row>

        <Row id='live-border' />

        {/* SHOEBOX COLLECTION */}
        <Row className='text-center m-3 p-3'>
          <Col lg={4}>
            <Image
              id='shadow'
              className='py-3'
              src={Shoebox}
              alt='Shoebox collection'
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h3 className='text-center'>Shoebox Collection</h3>
            <p id='events-text' className='text-center'>
              <strong>- February -</strong>
              <br />
              Items: <strong>Accessories</strong>
            </p>
            <p id='events-text'>
              For further details, please <a href='/connect'>contact us</a>.
            </p>
          </Col>
        </Row>

        {/* <Row className='text-center'>
          <Col md={1} />
          <Col md={5}>
            <Image
              id='watch'
              src={Watch}
              alt='Watch live sermons'
              className='ml-3'
            />
          </Col>

          <Col md={5} className='text-center'>
            <h4>Sermons Streaming Live Now!</h4>
            <p id='events-text' className='mt-3'>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
          <Col md={1} />
        </Row> */}
      </Container>
    </Fragment>
  )
}

export default Events
