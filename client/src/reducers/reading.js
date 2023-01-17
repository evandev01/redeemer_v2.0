import {
	READING_CREATE_REQUEST,
	READING_CREATE_SUCCESS,
	READING_CREATE_FAIL,
	READING_CREATE_RESET,
	READING_LIST_REQUEST,
	READING_LIST_SUCCESS,
	READING_LIST_FAIL,
	READING_DETAILS_REQUEST,
	READING_DETAILS_SUCCESS,
	READING_DETAILS_FAIL,
	READING_UPDATE_REQUEST,
	READING_UPDATE_SUCCESS,
	READING_UPDATE_FAIL,
	READING_UPDATE_RESET,
	READING_DELETE_REQUEST,
	READING_DELETE_SUCCESS,
	READING_DELETE_FAIL,
} from '../constants/reading'

export const readingListReducer = (state = { readings: [] }, action) => {
	switch (action.type) {
		case READING_LIST_REQUEST:
			return {
				loading: true,
				readings: [],
			}
		case READING_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				readings: action.payload,
			}
		case READING_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export const readingDetailsReducer = (state = { reading: {} }, action) => {
	switch (action.type) {
		case READING_DETAILS_REQUEST:
			return {
				loading: true,
				...state,
			}
		case READING_DETAILS_SUCCESS:
			return {
				loading: false,
				success: true,
				reading: action.payload,
			}
		case READING_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export const readingCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case READING_CREATE_REQUEST:
			return { loading: true }
		case READING_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				reading: action.payload,
			}
		case READING_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		case READING_CREATE_RESET:
			return {}
		default:
			return state
	}
}

export const readingUpdateReducer = (state = { reading: {} }, action) => {
	switch (action.type) {
		case READING_UPDATE_REQUEST:
			return { loading: true }
		case READING_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				reading: action.payload,
			}
		case READING_UPDATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		case READING_UPDATE_RESET:
			return { reading: {} }
		default:
			return state
	}
}

export const readingDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case READING_DELETE_REQUEST:
			return { loading: true }
		case READING_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			}
		case READING_DELETE_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
