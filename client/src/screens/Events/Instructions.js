import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const Instructions = () => {
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
  }, [userInfo, navigate])

  return (
    userInfo && (
      <>
        <Container id='container-div'>
          <Row>
            <Col className='text-center p-3'>
              <h3>- Event Instructions -</h3>
            </Col>
          </Row>
          <Row id='live-border' />
          <Row>
            <Col md={12}>
              <h5 className='text-center' style={{ fontWeight: 'bold' }}>
                How to add a new event:{' '}
              </h5>
              <br />
              <p>
                1. Click{' '}
                <Button>
                  <i className='fa-solid fa-circle-plus' /> Create New
                </Button>
              </p>

              <p>2. Fill out fields. (Fields may also be left blank.)</p>
              <p>3. Upload an image from your computer by clicking: </p>
              <Form.Control type='file' className='mt-3 mb-3' />
              <p>4. Or choose from currently stored images by clicking:</p>
              <Button variant='secondary' className='mt-3 mb-3'>
                Choose from Images
              </Button>
              <p>
                5. Click{' '}
                <Button
                  type='submit'
                  variant='warning'
                  className='py-3 mt-3 mb-3'
                  style={{ width: '100px' }}
                >
                  Save
                </Button>
              </p>
            </Col>
          </Row>

          <Row id='live-border' />

          <Row>
            <Col md={12}>
              <h5 className='text-center' style={{ fontWeight: 'bold' }}>
                How to edit an event:{' '}
              </h5>
              <br />
              <p>
                1. Click{' '}
                <Button className='px-2 m-2' variant='warning'>
                  <i className='fa-solid fa-pen-to-square' /> Edit
                </Button>
              </p>
              <p>2. Fill out fields. (Fields may also be left blank.)</p>
              <p>
                3. Reset Instructions: Clicking{' '}
                <Button className='mt-1 mb-1' size='sm'>
                  <i className='fa-solid fa-arrow-rotate-left' /> Reset
                </Button>{' '}
                will set the text field's value to the original event text for
                that field.
              </p>
              <h5>
                <span style={{ fontWeight: 'bold' }}>Important!</span>
              </h5>
              <h5>
                - If you do not click reset or enter in text, the field will be
                blank.
                <br />- If you want it to remain the{' '}
                <span style={{ fontWeight: 'bold' }}>SAME</span>, you{' '}
                <span style={{ fontWeight: 'bold' }}>MUST</span> click{' '}
                <Button className='mt-1 mb-1' size='sm'>
                  <i className='fa-solid fa-arrow-rotate-left' /> Reset
                </Button>
                <br />- Going back to the previous page or closing the browser
                window without saving will NOT have any affect on the event. So,
                don't worry if you leave the page. The event will remain as is.
              </h5>
              4. Click{' '}
              <Button variant='primary' className='px-2 m-2'>
                Save
              </Button>
            </Col>
          </Row>
          <Row id='live-border' />
        </Container>
      </>
    )
  )
}

export default Instructions
