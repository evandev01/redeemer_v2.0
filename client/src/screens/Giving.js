import React, { Fragment } from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'
import VancoIcon from '../assets/vanco/vanco-mobile.png'
import GooglePlay from '../assets/vanco/google-play.png'
import AppStore from '../assets/vanco/app-store2.png'
import Tithes from '../assets/vanco/tithes_img.jpg'

const Giving = () => {
  return (
    <Fragment>
      {/* <Container id='tithe-container'> */}
      <Row id='live-border' />
      <Row className='justify-content-center p-3'>
        <Card id='tithes' bg='light' text='dark'>
          <Card.Img variant='top' src={Tithes} />

          <Card.Body>
            <Card.Title className='text-center'>Tithes and Offering</Card.Title>
            <Card.Text className='text-center'>3 Ways To Give</Card.Text>

            <Card.Text className='text-center'>
              Click below to give online!
            </Card.Text>
            <Row className='justify-content-center'>
              <Button
                className='text-center'
                variant='primary'
                id='online-giving'
                href='https://secure.myvanco.com/L-YR09/home'
              >
                Give
              </Button>
            </Row>
          </Card.Body>

          {/*=== VANCO MOBILE APP ===*/}
          <Card.Body>
            <Row id='give-border' className='justify-content-center'>
              <Card.Title className='text-center'>OR</Card.Title>
            </Row>
            <Card.Text className='text-center'>
              Download the Vanco Mobile App
            </Card.Text>
            <Row id='vanco-icon-row'>
              <Col className='text-center'>
                <Image
                  id='app-icons'
                  src={VancoIcon}
                  alt='Vanco Mobile Faith Engagement'
                />
              </Col>
            </Row>

            <Row>
              <Col md={12} className='text-center'>
                <a
                  href='https://apps.apple.com/us/app/vanco-mobile-faith-engagement/id1504961674?itsct=apps_box_badge&amp;itscg=30200'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    id='app-icons'
                    src={AppStore}
                    alt='Download on the App Store'
                  />
                </a>
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <a
                  href='https://play.google.com/store/apps/details?id=com.vancopayments.vancomobile&hl=en_US&gl=US'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    id='app-icons'
                    src={GooglePlay}
                    alt='Get it on Google Play'
                  />
                </a>
              </Col>
            </Row>
          </Card.Body>

          <Card.Body>
            <Row id='give-border' className='justify-content-center'>
              <Card.Title className='text-center'>OR</Card.Title>
            </Row>
            <Card.Text className='text-center'>
              Text the dollar amount you would like to give to:
            </Card.Text>
            <Card.Title className='text-center'>
              <Card.Title className='text-center'>844-789-0498</Card.Title>
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
      {/* </Container> */}
    </Fragment>
  )
}

export default Giving
