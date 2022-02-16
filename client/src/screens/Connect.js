import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'

const Connect = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')

  const resetForm = () => {
    setEmail('')
    setSubject('')
    setText('')
  }

  const emailHandler = e => {
    setEmail(e.target.value)
  }
  const subjectHandler = e => {
    setSubject(e.target.value)
  }
  const textHandler = e => {
    setText(e.target.value)
  }

  const submitHandler = async e => {
    e.preventDefault()
    const data = {
      email: email,
      subject: subject,
      text: text,
    }
    await axios
      .post('/send', data)
      .then(alert('Message sent!'))
      .then(resetForm())
      .catch(err => {
        console.log(err)
        alert('Message failed')
      })
  }

  return (
    <>
      <Container>
        <Row id='live-border' />
        <Row className='mt-3'>
          <Col md={3} sm={1} />
          <Col md={6} sm={10}>
            <h3 className='text-center'>Connect with us!</h3>
            <br />
            <p className='text-center'>
              Have a prayer request? Need information about upcoming events?
            </p>
            <p className='text-center'>Please send us a message!</p>
            <Form onSubmit={e => submitHandler(e)}>
              <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type='email'
                  required={true}
                  placeholder='name@example.com'
                  value={email}
                  onChange={e => emailHandler(e)}
                />
                <Form.Label>Subject:</Form.Label>
                <Form.Control
                  type='text'
                  required={true}
                  placeholder='Please enter subject'
                  value={subject}
                  onChange={e => subjectHandler(e)}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as='textarea'
                  required={true}
                  placeholder='Please enter message'
                  rows={7}
                  value={text}
                  onChange={e => textHandler(e)}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={3} sm={1} />
        </Row>
      </Container>
    </>
  )
}

export default Connect
