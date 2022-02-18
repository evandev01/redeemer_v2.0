import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Shoebox from '../assets/events/shoebox.jpg'
import FoodDrive from '../assets/events/food_drive.png'
import Bible from '../assets/events/Bible.jpg'
// import Parents from '../assets/events/parents.png'
// import Church from '../assets/church/church.jpg'
// import Watch from '../assets/icons/video-icon.jpg'
// import YouTube from '../assets/icons/youtube-logo2.png'

const Events = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Row id='live-border' />
      {/* MENS BIBLE STUDY */}
      <Row className='mt-5'>
        <Col id='events-col' className='text-center' xs={12} sm={12} lg={6}>
          <Image id='events-graphic' src={Bible} alt="Men's Bible Study" />
        </Col>
        <Col xs={12} sm={12} lg={6} className='text-center'>
          <h3>Mens Bible Study</h3>
          <p>
            <strong>- Saturday Mornings -</strong>
            <br />
            <strong>7:00am - 8:30am</strong> through <strong>March 12th</strong>
          </p>
        </Col>
      </Row>

      <Row id='live-border' />

      {/* FOOD DRIVE */}
      <Row>
        <Col id='events-col' className='text-center' xs={12} sm={12} lg={6}>
          <Image id='events-graphic' src={FoodDrive} alt='Food drive' />
        </Col>
        <Col xs={12} sm={12} lg={6} className='text-center'>
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
      <Row>
        <Col id='events-col' className='text-center'>
          <Image id='events-graphic' src={Shoebox} alt='Shoebox collection' />
        </Col>
        <Col xs={12} sm={12} lg={6} className='text-center'>
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
          <Col xs={12} sm={12} lg={6}md={1} />
          <Col xs={12} sm={12} lg={6}md={5}>
            <Image
              id='watch'
              src={Watch}
              alt='Watch live sermons'
              className='ml-3'
            />
          </Col>

          <Col xs={12} sm={12} lg={6}md={5} className='text-center'>
            <h4>Sermons Streaming Live Now!</h4>
            <p id='events-text' className='mt-3'>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTb id='events-col'lLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
          <Col xs={12} sm={12} lg={6}md={1} />
        </Row> */}
    </div>
  )
}

export default Events
