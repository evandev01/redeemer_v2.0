import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <iframe
            title='maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.561140018221!2d-87.28931548434966!3d41.144105419003814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812196950e82fd5%3A0xda907da34fcb744c!2s5417%20IN-10%2C%20De%20Motte%2C%20IN%2046310!5e0!3m2!1sen!2sus!4v1645139354873!5m2!1sen!2sus'
            style={{
              maxWidth: '80vw',
              maxHeight: '400px',
              width: '100%',
              height: '400px',
              padding: '20px auto',
              margin: '20px auto',
              border: '0',
              allowfullscreen: '',
              loading: 'lazy',
            }}
          ></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
