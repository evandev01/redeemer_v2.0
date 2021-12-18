import React from 'react'
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap'
import '../index.css'

const NavTabs = props => {
  return (
    <>
      <Container id='nav-container' className='justify-content-center'>
        <Row className='justify-content-md-center'>
          <Col xs={1} md={1} lg={4} />
          <Col xs={10} md={10} lg={4}>
            <Navbar expand='md' className='justify-content-md-center'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Navbar activeKey='/'>
                  <Nav.Item>
                    <Nav.Link href='/'>HOME</Nav.Link>
                  </Nav.Item>
                </Navbar>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href='/about'>ABOUT</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    {/* <Badge bg='primary' style={{ color: '#007bff' }}>
                      New
                    </Badge> */}
                    <Nav.Link href='/events'>EVENTS</Nav.Link>
                    {/* </Badge> */}
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href='/watchlive'>WATCH</Nav.Link>
                  </Nav.Item>
                </Nav>
                {/* <Nav>
                  <Nav.Item>
                    <Nav.Link href='/connect'>CONNECT</Nav.Link>
                  </Nav.Item>
                </Nav> */}
                <Nav>
                  <Nav.Item>
                    <Nav.Link href='/giving'>GIVING</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href='/staff'>STAFF</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={1} md={1} lg={4} />
        </Row>
      </Container>
    </>
  )
}

export default NavTabs
