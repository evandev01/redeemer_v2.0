import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/user'

const Reading = () => {
	const [date, setDate] = useState('')
	const [week, setWeek] = useState('')
	const [verses, setVerses] = useState([
		{ verse1: '' },
		{ verse2: '' },
		{ verse3: '' },
		{ verse4: '' },
		{ verse5: '' },
		{ verse6: '' },
		{ verse7: '' },
	])
	const { verse1, verse2, verse3, verse4, verse5, verse6, verse7 } = verses

	const changeHandler = e => {
		setVerses(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	// const navigate = useNavigate()

	// const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const { loading, error, userInfo } = userLogin

	const submitHandler = e => {
		e.preventDefault()
		console.log(verses)
	}

	return (
		<>
			<Container id='container-div'>
				<Row id='live-border' />
				<Row className='mt-5'>
					<Col xs='auto' md={3} />
					<Col xs={12} md={6}>
						{error && <Message variant='danger'>{error}</Message>}
						{loading && <Loader />}
						<h1>Week {week}</h1>
						<Form onSubmit={submitHandler}>
							<Form.Group className='mb-3' controlId='controlDate'>
								<Form.Label>Week Number</Form.Label>
								<Form.Control
									type='text'
									placeholder='Week Number'
									onChange={e => setWeek(e.target.value)}
									value={week}
								/>
							</Form.Group>

							<Form.Group className='mb-3' controlId='controlDate'>
								<Form.Label>Date Range</Form.Label>
								<Form.Control
									type='text'
									name='date'
									placeholder='Date range'
									onChange={e => setDate(e.target.value)}
									value={date}
								/>
							</Form.Group>

							<Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 1</Form.Label>
								<Form.Control
									type='text'
									name='verse1'
									placeholder='Verse(s)'
									onChange={changeHandler}
									value={verse1}
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 2</Form.Label>
								<Form.Control
									type='text'
									name='verse2'
									placeholder='Verse(s)'
									onChange={changeHandler}
									value={verse2}
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 3</Form.Label>
								<Form.Control
									type='text'
									name='verse3'
									placeholder='Verse(s)'
									onChange={changeHandler}
									value={verse3}
								/>
							</Form.Group>

							{/* <Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 4</Form.Label>
								<Form.Control
									type='text'
									placeholder='Verse(s)'
									onChange={e => setVerses(...verses, e.target.value)}
									value={verses[index]}
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 5</Form.Label>
								<Form.Control
									type='text'
									placeholder='Verse(s)'
									onChange={e => setVerses(...verses, e.target.value)}
									value={verses[index]}
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 6</Form.Label>
								<Form.Control
									type='text'
									placeholder='Verse(s)'
									onChange={e => setVerses(...verses, e.target.value)}
									value={verses[index]}
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='controlVerse'>
								<Form.Label>Line 7</Form.Label>
								<Form.Control
									type='text'
									placeholder='Verse(s)'
									onChange={e => setVerses(...verses, e.target.value)}
									value={verses[index]}
								/>
							</Form.Group> */}

							<Button variant='success' type='submit'>
								Submit
							</Button>
						</Form>
					</Col>
					<Col xs='auto' md={3} />
				</Row>
			</Container>
		</>
	)
}

export default Reading
