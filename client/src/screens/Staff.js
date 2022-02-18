import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Joel from '../assets/staff/IMG_2488.jpeg'
import Georgette from '../assets/staff/IMG_2493.jpeg'
import Lisa from '../assets/staff/IMG_2499.jpeg'
import Steve from '../assets/staff/IMG_2479.jpeg'
import David from '../assets/staff/IMG_2478.jpeg'
import Bob from '../assets/staff/IMG_2475.jpeg'

const Staff = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <Container id='staff' className='mt-5'>
        <Row className='justify-content-md-center'>
          <Col xs={12} lg={12} className='text-center'>
            <h4 id='title'>Our Servant Leaders</h4>
          </Col>
        </Row>
        <Row id='live-border' />

        <Row className='justify-content-md-center'>
          <Col xs={12} lg={12} className='text-center'>
            <h5 id='staff-h5'>Elders</h5>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md={6} className='text-center'>
            <Image src={Joel} alt='Pastor Joel' id='photo' />
            <h6 id='staff-h6'>Pastor Joel Gilbert</h6>
          </Col>
          {/* <Col md={2} /> */}
          <Col md={6} className='text-center'>
            <Image src={Bob} alt='Bob - Elder' id='photo' />
            <h6 id='staff-h6'>Pastor Bob Wheeler</h6>
          </Col>
        </Row>
        <Row id='live-border' />
        <Row className='justify-content-md-center'>
          <Col md={6} className='text-center'>
            <Image src={Steve} alt='Steve - Elder' id='photo' />
            <h6 id='staff-h6'>Steve Renfrow</h6>
            <p id='staff-position'>(Deacon)</p>
          </Col>
          {/* </Row>

        <Row className='justify-content-md-center'> */}
          <Col md={6} className='text-center'>
            <Image
              src={David}
              alt={'David Harris - Worship Leader'}
              id='photo'
            />
            <h6 id='staff-h6'>David Harris</h6>
            <p id='staff-position'>(Worship Leader)</p>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md={6} className='text-center'>
            <Image
              src={Georgette}
              alt={'Georgette Aguilar - Church Treasurer'}
              id='photo'
            />
            <h6 id='staff-h6'>Georgette Aguilar</h6>
            <p id='staff-position'>(Church Treasurer)</p>
          </Col>
          {/* <Col md={2} /> */}
          <Col md={6} className='text-center'>
            <Image src={Lisa} alt={'Lisa - Volunteer'} id='photo' />
            <h6 id='staff-h6'>Lisa Burke</h6>
            <p id='staff-position'>(Church Clerk)</p>
          </Col>
        </Row>
        <div id='bottom' />
      </Container>
    </div>
  )
}

export default Staff
