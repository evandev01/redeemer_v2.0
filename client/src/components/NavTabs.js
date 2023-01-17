import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap'
import '../index.css'
import { logout } from '../actions/user'

const NavTabs = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
		navigate('/')
	}
	return (
		<>
			<div className='nav-container' style={{ fontWeight: '700' }}>
				<div className='nav-row'>
					<Navbar expand='md'>
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
									<Nav.Link
										// style={{ color: 'white' }}
										id='link'
										href='/events'>
										EVENTS
									</Nav.Link>
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
									<Nav.Link id='link' href='/staff'>
										STAFF
									</Nav.Link>
								</Nav.Item>
							</Nav>

							<Nav>
								<Nav.Item>
									<Nav.Link id='link' href='/Bible'>
										BIBLE READING
									</Nav.Link>
								</Nav.Item>
							</Nav>

							{userInfo && userInfo !== null && (
								<Nav>
									<Nav.Item>
										<Nav.Link
											id='link'
											onClick={logoutHandler}
											style={{ color: 'blue' }}>
											LOGOUT
										</Nav.Link>
									</Nav.Item>
								</Nav>
							)}
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		</>
	)
}

export default NavTabs
