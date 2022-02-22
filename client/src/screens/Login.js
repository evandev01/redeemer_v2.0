import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { login } from '../actions/user'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      window.location.href = '/watchlive'
    }
  }, [userInfo])

  const submitHandler = e => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Container>
        <Row id='live-border' />
        <Row className='mt-5'>
          <Col xs='auto' md={3} />
          <Col xs={12} md={6}>
            <Form onSubmit={submitHandler}>
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
              <Button variant='success' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs='auto' md={3} />
        </Row>
      </Container>
    </>
  )
}

export default Login
