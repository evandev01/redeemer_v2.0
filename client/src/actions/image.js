import axios from 'axios'
import {
  IMAGE_CREATE_REQUEST,
  IMAGE_CREATE_SUCCESS,
  IMAGE_CREATE_FAIL,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
} from '../constants/image'

export const listImages = () => async dispatch => {
  try {
    dispatch({ type: IMAGE_LIST_REQUEST })

    const { data } = await axios.get('/api/images')

    dispatch({
      type: IMAGE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: IMAGE_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createImage = newImage => async dispatch => {
  try {
    dispatch({ type: IMAGE_CREATE_REQUEST })

    const { data } = await axios.post('/api/images', newImage)

    dispatch({
      type: IMAGE_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: IMAGE_CREATE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
