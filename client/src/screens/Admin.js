import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Admin = () => {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('Please login')
  const [messageColor, setMessageColor] = useState('black')

  let navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    if (password === '1234') {
      // process.env.ADMIN_PASSWORD
      setMessageColor('black')
      let path = '/watchlive'
      navigate(path)
    } else {
      setMessageColor('red')
      setMessage('Incorrect Password')
      setPassword('')
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <Form.Text style={{ color: messageColor }}>{message}</Form.Text>
            </Form.Group>
            <Button
              id='login'
              onClick={e => login(e)}
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

export default Admin
