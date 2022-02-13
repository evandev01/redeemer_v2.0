import axios from 'axios'
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  EMBED_LINK_REQUEST,
  EMBED_LINK_SUCCESS,
  EMBED_LINK_FAIL,
} from '../constants/adminConstants'

export const login = isLoggedIn => dispatch => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    })

    if (isLoggedIn === true) {
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: isLoggedIn,
      })
      document.location.href = '/watchlive'
    }
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

export const updateEmbedLink = embedLink => async dispatch => {
  try {
    dispatch({
      type: EMBED_LINK_REQUEST,
    })

    const { data } = await axios.post('/api/embed', embedLink)

    dispatch({
      type: EMBED_LINK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: EMBED_LINK_FAIL,
      payload: message,
    })
  }
}
