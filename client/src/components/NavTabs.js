import React from 'react'
import { Nav, Container, Row, Col, Navbar, Badge } from 'react-bootstrap'
import '../index.css'

const NavTabs = () => {
  return (
    <>
      <Container
        id='nav-container'
        className='justify-content-center'
        style={{ fontWeight: '700' }}
      >
        <Row className='justify-content-md-center'>
          <Col xs={1} md={1} lg={4} />
          <Col xs={10} md={10} lg={4}>
            <Navbar expand='md' className='justify-content-md-center'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Navbar>
                  <Nav.Item>
                    <Nav.Link id='link' href='/'>
                      HOME
                    </Nav.Link>
                  </Nav.Item>
                </Navbar>
                <Nav>
                  <Nav.Item>
                    <Nav.Link id='link' href='/about'>
                      ABOUT
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    {/* <Badge
                      bg='secondary'
                      style={{
                        color: 'rgba(126, 240, 82, 0.795)',
                      }}
                      className='text-center'
                    >
                      New */}
                    <Nav.Link
                      // style={{ color: 'white' }}
                      id='link'
                      href='/events'
                    >
                      EVENTS
                    </Nav.Link>
                    {/* </Badge> */}
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link id='link' href='/watchlive'>
                      WATCH
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link id='link' href='/connect'>
                      CONNECT
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link id='link' href='/giving'>
                      GIVING
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link id='link' href='/staff'>
                      STAFF
                    </Nav.Link>
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
