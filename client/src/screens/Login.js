import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button
              // id='login'
              // onClick={e => login(e)}
              variant='success'
              type='submit'
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
