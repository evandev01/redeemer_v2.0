import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { listImages } from '../../actions/image'

const Images = () => {
  const [isActive, setIsActive] = useState(false)

  const style1 = {
    maxWidth: '300px',
    maxHeight: '300px',
  }
  // const style2 = {
  //   maxWidth: '300px',
  //   maxHeight: '300px',
  //   border: '5px groove blue',
  // }
  // const [selectedStyle, setSelectedStyle] = useState(style1)

  const dispatch = useDispatch()

  const imageList = useSelector(state => state.imageList)
  const { images, success: successImages, error: errorImages } = imageList

  const toggleClass = () => {
    // e.preventDefault()
    setIsActive(!isActive)
  }

  useEffect(() => {
    dispatch(listImages())
  }, [dispatch])

  return (
    <>
      <Container>
        <Row>
          <Col className='text-center'>
            {images &&
              images.map((image, i) => (
                <Image
                  key={i}
                  className='m-3 p-3'
                  // id={isActive ? 'selected' : 'not-selected'}
                  src={image.image}
                  onClick={e => {
                    console.log(e.target.style)
                    console.log(image.image)
                    console.log(images[i])
                  }}
                  style={style1}
                />
              ))}
          </Col>
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
