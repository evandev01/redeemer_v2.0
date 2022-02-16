import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Admin = () => {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('Please login')
  const [messageColor, setMessageColor] = useState('black')
  const [bool, setBool] = useState(false)

  const navigate = useNavigate()

  const login = async e => {
    e.preventDefault()
    const data = {
      password: password,
    }
    await axios.post('/api/login', data).then(response => {
      console.log(response)
      if (response === true) {
        navigate('/watchlive')
      }
    })
  }

  // useEffect(() => {
  //   if (bool === true) {
  //     history.push('/watchlive')
  //   }
  // }, [bool])

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
              {/* <Form.Text style={{ color: messageColor }}>{message}</Form.Text> */}
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
