import axios from 'axios'
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
} from '../constants/adminConstants'

export const login = password => async dispatch => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    })

    const { data } = await axios.post('/login', password)

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = 'Incorrect password'
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: message,
    })
  }
}

export const logout = () => dispatch => {
  dispatch({ type: ADMIN_LOGOUT })
  document.location.href = '/home'
}
