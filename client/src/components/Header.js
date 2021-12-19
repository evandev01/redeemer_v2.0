import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import Logo from '../assets/header/logo-3trees.png'

const Header = () => {
  return (
    <>
      <Container>
        <Row md={12}>
          <Image src={Logo} />
        </Row>
      </Container>
    </>
  )
}

export default Header
