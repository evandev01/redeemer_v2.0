import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Welcome = () => {
  return (
    <>
      <Container
        style={{
          backgroundColor: 'rgba(200, 200, 200, 0.5)',
          padding: '10px 0',
          border: '0.02em solid rgba(123, 123, 123, 0.8)',
        }}
      >
        <Row>
          <Col xs={12} className='text-center'>
            <h3>Welcome, Admin</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Welcome
