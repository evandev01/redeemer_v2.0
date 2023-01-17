import axios from 'axios'
import {
	READING_CREATE_REQUEST,
	READING_CREATE_SUCCESS,
	READING_CREATE_FAIL,
	READING_LIST_REQUEST,
	READING_LIST_SUCCESS,
	READING_LIST_FAIL,
	READING_DETAILS_REQUEST,
	READING_DETAILS_SUCCESS,
	READING_DETAILS_FAIL,
	READING_UPDATE_REQUEST,
	READING_UPDATE_SUCCESS,
	READING_UPDATE_FAIL,
	READING_DELETE_REQUEST,
	READING_DELETE_SUCCESS,
	READING_DELETE_FAIL,
} from '../constants/reading'

export const listReadings = () => async dispatch => {
	try {
		dispatch({ type: READING_LIST_REQUEST })

		const { data } = await axios.get('/api/reading')

		dispatch({
			type: READING_LIST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: READING_LIST_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const listReadingDetails = id => async dispatch => {
	try {
		dispatch({ type: READING_DETAILS_REQUEST })

		const { data } = await axios.get(`/api/reading/${id}`)

		dispatch({
			type: READING_DETAILS_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: READING_DETAILS_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const createReading = newReading => async dispatch => {
	try {
		dispatch({ type: READING_CREATE_REQUEST })

		const { data } = await axios.post('/api/reading', newReading)

		dispatch({
			type: READING_CREATE_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: READING_CREATE_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const updateReading = readingData => async dispatch => {
	try {
		dispatch({ type: READING_UPDATE_REQUEST })

		const { data } = await axios.put(
			`/api/reading/${readingData._id}`,
			readingData
		)

		dispatch({
			type: READING_UPDATE_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: READING_UPDATE_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const deleteReading = id => async dispatch => {
	try {
		dispatch({ type: READING_DELETE_REQUEST })

		await axios.delete(`/api/reading/${id}`)

		dispatch({ type: READING_DELETE_SUCCESS })
	} catch (error) {
		dispatch({
			type: READING_DELETE_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
