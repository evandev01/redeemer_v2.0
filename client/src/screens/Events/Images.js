import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { listImages } from '../../actions/image'
require('dotenv').config({ path: '../../.env' })

const Images = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const imageList = useSelector(state => state.imageList)
  const { images, loading, error } = imageList

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      dispatch(listImages())
    }
  }, [dispatch, userInfo, navigate])

  const chooseImageHandler = (e, image) => {
    e.preventDefault()
    const chosenImage = image.image
    console.log(chosenImage)
    const confirmed = window.confirm('Choose this image?')
    if (confirmed) {
      localStorage.setItem('image', chosenImage)
      navigate(-1)
    } else return
  }

  return (
    <>
      <Container>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        <Row>
          {images &&
            images.map((image, i) => (
              <Col
                key={i}
                style={{ height: '325px' }}
                className='m-3 p-3 text-center'
              >
                <Image
                  className='m-3 p-3'
                  src={image.image}
                  onClick={e => {
                    console.log(e.target.style)
                    console.log(image.image)
                    console.log(images[i])
                  }}
                  style={{ height: '150px', width: 'auto' }}
                />
                <Button
                  id='choose-img'
                  onClick={e => chooseImageHandler(e, image)}
                >
                  Choose
                </Button>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default Images

// events &&
//   events.map((event, index) => (
//     <Image
//       key={index}
//       className='m-3 p-3'
//       src={event.image}
//       style={{ maxWidth: '300px', maxHeight: '300px' }}
//     />
//   ))
