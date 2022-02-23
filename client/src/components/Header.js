import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row, Image } from 'react-bootstrap'
import Logo from '../assets/header/logo-3trees.png'
import Welcome from './Welcome'

const Header = () => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  return (
    <>
      <header>
        <Row>
          <Col className='text-center'>
            <Image id='header-image' src={Logo} />
          </Col>
        </Row>
        {userInfo && userInfo !== null && <Welcome />}
      </header>
    </>
  )
}

export default Header
