import axios from 'axios'
import {
	EMAIL_SEND_REQUEST,
	EMAIL_SEND_SUCCESS,
	EMAIL_SEND_FAIL,
	EMAIL_SEND_RESET,
} from '../constants/email'

export const sendEmail = emailData => async dispatch => {
	try {
		dispatch({ type: EMAIL_SEND_REQUEST })

		const { data } = await axios.post('/api/send', emailData)

		dispatch({
			type: EMAIL_SEND_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: EMAIL_SEND_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
