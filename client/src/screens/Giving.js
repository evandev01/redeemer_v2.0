import React, { Fragment } from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'
import VancoIcon from '../assets/vanco/vanco-mobile.png'
import GooglePlay from '../assets/vanco/google-play.png'
import AppStore from '../assets/vanco/app-store2.png'
import Tithes from '../assets/vanco/tithes_img.jpg'

const Giving = () => {
  return (
    <Fragment>
      <Container id='tithe-container'>
        <Row className='justify-content-center'>
          <Card id='tithes' bg='light' text='dark'>
            <Card.Img variant='top' src={Tithes} />
            <Card.Body>
              <Card.Title className='text-center'>
                Tithes and Offering
              </Card.Title>
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
              <Container id='app-stores'>
                <Row id='vanco-icon-row' className='justify-content-center'>
                  <Col className='text-center' xs={12} md={12} lg={12}>
                    <Image
                      id='vanco'
                      src={VancoIcon}
                      alt='Vanco Mobile Faith Engagement'
                    />
                  </Col>
                </Row>

                <Row className='justify-content-center'>
                  <Col className='text-center'>
                    <a href='https://apps.apple.com/us/app/vanco-mobile-faith-engagement/id1504961674?itsct=apps_box_badge&amp;itscg=30200'>
                      <Image
                        src={AppStore}
                        alt='Download on the App Store'
                        style={{
                          width: '150px',
                          height: 'auto',
                        }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col className='text-center'>
                    <a href='https://play.google.com/store/apps/details?id=com.vancopayments.vancomobile&hl=en_US&gl=US'>
                      <Image
                        src={GooglePlay}
                        alt='Get it on Google Play'
                        style={{
                          width: '150px',
                          height: 'auto',
                        }}
                      />
                    </a>
                  </Col>
                </Row>
              </Container>
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
      </Container>
    </Fragment>
  )
}

export default Giving
