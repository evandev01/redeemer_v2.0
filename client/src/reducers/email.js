import {
	EMAIL_SEND_REQUEST,
	EMAIL_SEND_SUCCESS,
	EMAIL_SEND_FAIL,
	EMAIL_SEND_RESET,
} from '../constants/email'

export const emailSendReducer = (state = { message: {} }, action) => {
	switch (action.type) {
		case EMAIL_SEND_REQUEST:
			return {
				loading: true,
			}
		case EMAIL_SEND_SUCCESS:
			return {
				loading: false,
				success: true,
				message: action.payload,
			}
		case EMAIL_SEND_FAIL:
			return {
				loading: false,
				error: true,
				message: action.payload,
			}
		case EMAIL_SEND_RESET:
			return {}
		default:
			return state
	}
}
