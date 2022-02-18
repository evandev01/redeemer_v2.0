import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Logo from '../assets/header/logo-3trees.png'

const Header = () => {
  return (
    <>
      <header>
        <Row>
          <Col className='text-center'>
            <Image id='header-image' src={Logo} />
          </Col>
        </Row>
      </header>
    </>
  )
}

export default Header
