import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Shoebox from '../assets/events/shoebox.jpg'
import FoodDrive from '../assets/events/food_drive.png'
import Bible from '../assets/events/Bible.jpg'
import WOM from '../assets/events/wom.jpg'
import BYBC from '../assets/events/bybc.jpg'

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

      {/* WOM */}
      <Row>
        <Col id='events-col' className='text-center' xs={12} sm={12} lg={6}>
          <Image id='events-graphic' src={WOM} alt='WOM' />
        </Col>
        <Col xs={12} sm={12} lg={6} className='text-center'>
          <h3 className='text-center'>WOM</h3>
          <p id='events-text' className='text-center'>
            <strong>- Tuesday, March 1st -</strong>
            <br />
            <strong>6:30pm</strong>
          </p>
          <p id='events-text'>
            For further details, please <a href='/connect'>contact us</a>.
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
            <strong>- March -</strong>
            <br />
            Items: <strong>Hearty Soups with Meat</strong>
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
            <strong>- March -</strong>
            <br />
            Items: <strong>Handcrafted Items</strong>
          </p>
          <p id='events-text'>
            For further details, please <a href='/connect'>contact us</a>.
          </p>
        </Col>
      </Row>

      <Row id='live-border' />

      {/* BACKYARD BIBLE CLUB */}
      <Row>
        <Col id='events-col' className='text-center' xs={12} sm={12} lg={6}>
          <Image id='events-graphic' src={BYBC} alt='Backyard Bible Club' />
        </Col>
        <Col xs={12} sm={12} lg={6} className='text-center'>
          <h3 className='text-center'>Backyard Bible Club</h3>
          <p id='events-text' className='text-center'>
            <strong>
              Sign up Sheet in Foyer for families interested in hosting or
              helping with Backyard Bible Club in their Neighborhood in August.
            </strong>
          </p>
        </Col>
      </Row>

      <Row id='live-border' />
    </div>
  )
}

export default Events
