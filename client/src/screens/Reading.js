import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Form, Row, Image } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listReadings, updateReading } from '../actions/reading'
import PDF from '../documents/Bible-Reading-Schedule-2023.pdf'
import Bible from '../assets/church/Bible.jpg'

const Reading = () => {
	const [isEdit, setIsEdit] = useState(false)
	const [date, setDate] = useState('')
	const [week, setWeek] = useState('')
	const [verses, setVerses] = useState({
		verse1: '',
		verse2: '',
		verse3: '',
		verse4: '',
		verse5: '',
	})
	const { verse1, verse2, verse3, verse4, verse5 } = verses

	const dispatch = useDispatch()

	const changeHandler = e => {
		setVerses(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const userLogin = useSelector(state => state.userLogin)
	const { loading, error, userInfo } = userLogin

	const readingList = useSelector(state => state.readingList)
	const {
		readings,
		success: successList,
		loading: loadingList,
		error: errorList,
	} = readingList

	const readingUpdate = useSelector(state => state.readingUpdate)
	const {
		success: successUpdate,
		loading: loadingUpdate,
		error: errorUpdate,
	} = readingUpdate

	useEffect(() => {
		dispatch(listReadings())

		setIsEdit(false)
	}, [dispatch, successUpdate])

	const submitHandler = e => {
		e.preventDefault()
		const readingData = {
			_id: readings[0]._id,
			week: week,
			date: date,
			verses: [verse1, verse2, verse3, verse4, verse5],
		}
		dispatch(updateReading(readingData))
	}

	const setOriginal = e => {
		e.preventDefault()
		setWeek(readings[0].week)
		setDate(readings[0].date)
		setVerses({
			verse1: readings[0].verses[0],
			verse2: readings[0].verses[1],
			verse3: readings[0].verses[2],
			verse4: readings[0].verses[3],
			verse5: readings[0].verses[4],
		})
	}

	return (
		<>
			<Container id='container-div'>
				<Row id='live-border' />
				<Row className='mt-1 justify-content-md-center'>
					{/* <Col xs='auto' md={3} /> */}
					<Col xs={12} md={8} className='text-center'>
						<div className='reading-row'>
							<div className='reading-col'>
								<Image
									src={Bible}
									style={{
										width: '400px',
										maxWidth: '100%',
										height: 'auto',
										borderRadius: '2rem',
										padding: '1em',
										marginBottom: '1rem',
									}}
								/>
								{/* </div>
							<div> */}
								<h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
									Yearly Bible Reading Plan
								</h1>
							</div>
						</div>
						{errorList || errorUpdate ? (
							<Message variant='danger'>
								{errorList ? errorList : errorUpdate && errorUpdate}
							</Message>
						) : loadingList || loadingUpdate ? (
							<Loader />
						) : (
							readings &&
							successList &&
							!loadingList &&
							!loadingUpdate && (
								<>
									<div className='reading-row'>
										<div className='reading-col'>
											<h3
												style={{
													textAlign: 'center',
												}}>
												Week {readings[0].week}
											</h3>
											<Form onSubmit={submitHandler}>
												<Form.Group className='mb-3' controlId='controlDate'>
													{isEdit && (
														<>
															<Form.Label>Week Number</Form.Label>
															<Form.Control
																type='text'
																placeholder='Week Number'
																onChange={e => setWeek(e.target.value)}
																value={week}
															/>
														</>
													)}
												</Form.Group>

												<Form.Group className='mb-3' controlId='controlDate'>
													<h3
														style={{
															textAlign: 'center',
															textDecoration: 'underline',
															margin: '1em',
														}}>
														{readings[0].date}
													</h3>
													{isEdit && (
														<>
															<Form.Label>Date Range</Form.Label>
															<Form.Control
																type='text'
																name='date'
																placeholder='Enter date range'
																onChange={e => setDate(e.target.value)}
																value={date}
															/>
														</>
													)}
												</Form.Group>

												<Form.Group className='mb-3' controlId='controlVerse'>
													<h4>{readings[0].verses[0]}</h4>
													{isEdit && (
														<>
															<Form.Label>Line 1</Form.Label>
															<Form.Control
																type='text'
																name='verse1'
																placeholder='Enter line 1'
																onChange={changeHandler}
																value={verse1}
															/>
														</>
													)}
												</Form.Group>

												<Form.Group className='mb-3' controlId='controlVerse'>
													<h4>{readings[0].verses[1]}</h4>
													{isEdit && (
														<>
															<Form.Label>Line 2</Form.Label>
															<Form.Control
																type='text'
																name='verse2'
																placeholder='Enter line 2'
																onChange={changeHandler}
																value={verse2}
															/>
														</>
													)}
												</Form.Group>

												<Form.Group className='mb-3' controlId='controlVerse'>
													<h4>{readings[0].verses[2]}</h4>
													{isEdit && (
														<>
															<Form.Label>Line 3</Form.Label>
															<Form.Control
																type='text'
																name='verse3'
																placeholder='Enter line 3'
																onChange={changeHandler}
																value={verse3}
															/>
														</>
													)}
												</Form.Group>

												<Form.Group className='mb-3' controlId='controlVerse'>
													<h4>{readings[0].verses[3]}</h4>
													{isEdit && (
														<>
															<Form.Label>Line 4</Form.Label>
															<Form.Control
																type='text'
																name='verse4'
																placeholder='Enter line 4'
																onChange={changeHandler}
																value={verse4}
															/>
														</>
													)}
												</Form.Group>

												<Form.Group className='mb-3' controlId='controlVerse'>
													<h4>{readings[0].verses[4]}</h4>
													{isEdit && (
														<>
															<Form.Label>Line 5</Form.Label>
															<Form.Control
																type='text'
																name='verse5'
																placeholder='Enter line 5'
																onChange={changeHandler}
																value={verse5}
															/>
														</>
													)}
												</Form.Group>
												<div className='reading-row'>
													<div className='reading-col'>
														<Button
															href={PDF}
															style={{ padding: '1rem', margin: '1rem' }}
															download>
															Download Plan
														</Button>
													</div>
												</div>
												<div className='reading-row'>
													{userInfo && userInfo.token && (
														<div className='reading-col'>
															<Button
																onClick={e => {
																	setOriginal(e)
																	setIsEdit(true)
																}}
																style={{ padding: '1rem', margin: '1rem' }}>
																Edit
															</Button>
														</div>
													)}
													{isEdit && (
														<>
															<div className='reading-col'>
																<Button
																	variant='primary'
																	type='submit'
																	style={{ padding: '1rem', margin: '1rem' }}>
																	Save
																</Button>
															</div>
															<div className='reading-col'>
																<Button
																	onClick={() => setIsEdit(false)}
																	variant='primary'
																	type='submit'
																	style={{ padding: '1rem', margin: '1rem' }}>
																	Exit
																</Button>
															</div>
														</>
													)}
												</div>
											</Form>
										</div>
									</div>
								</>
							)
						)}
					</Col>
					{/* <Col xs='auto' md={3} /> */}
				</Row>
				<Row className='justify-content-center'>
					<Col>
						{/* <p>
							Week 1
							<br /> January 1 – January 7
							<br />• Genesis 1-2; Psalm 19; Mark 1
							<br />• Gen 3-5; Mark 2
							<br />• Gen 6-8; Psalm 104; Mark 3
							<br />• Gen 9-11; Mark 4
							<br />• Gen 12-15; Psalm 148; Mark 5
							<br />
							Be sure to check in daily or weekly and share your thoughts and
							encourage others!
						</p> */}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Reading
