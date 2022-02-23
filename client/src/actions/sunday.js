import axios from 'axios'
import {
  SUNDAY_CREATE_REQUEST,
  SUNDAY_CREATE_SUCCESS,
  SUNDAY_CREATE_FAIL,
  SUNDAY_UPDATE_REQUEST,
  SUNDAY_UPDATE_SUCCESS,
  SUNDAY_UPDATE_FAIL,
  SUNDAY_LIST_REQUEST,
  SUNDAY_LIST_SUCCESS,
  SUNDAY_LIST_FAIL,
  SUNDAY_GET_REQUEST,
  SUNDAY_GET_SUCCESS,
  SUNDAY_GET_FAIL,
  SUNDAY_DELETE_REQUEST,
  SUNDAY_DELETE_SUCCESS,
  SUNDAY_DELETE_FAIL,
} from '../constants/sunday'

export const createSunday = sunday => async dispatch => {
  try {
    dispatch({
      type: SUNDAY_CREATE_REQUEST,
    })

    const { data } = await axios.post('/api/embed/sunday', sunday)

    dispatch({
      type: SUNDAY_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: SUNDAY_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateSunday = sunday => async dispatch => {
  console.log(`at sunday action: \n${sunday._id}\n${sunday.embedURL}`)
  const id = sunday._id
  // const embedURL = sunday.embedURL
  try {
    dispatch({
      type: SUNDAY_UPDATE_REQUEST,
    })

    const { data } = await axios.put(`/api/embed/sunday/${id}`, sunday)

    dispatch({
      type: SUNDAY_UPDATE_SUCCESS,
      loading: false,
      payload: data,
    })
  } catch (error) {
    console.error(error)
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: SUNDAY_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const listSundays = () => async dispatch => {
  try {
    dispatch({
      type: SUNDAY_LIST_REQUEST,
    })

    const { data } = await axios.get('/api/embed/sunday')

    dispatch({
      type: SUNDAY_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: SUNDAY_LIST_FAIL,
      payload: message,
    })
  }
}

export const getSunday = id => async dispatch => {
  try {
    dispatch({
      type: SUNDAY_GET_REQUEST,
    })

    const { data } = await axios.get(`/api/embed/sunday/${id}`)

    dispatch({
      type: SUNDAY_GET_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: SUNDAY_GET_FAIL,
      payload: message,
    })
  }
}

export const deleteSunday = id => async dispatch => {
  try {
    dispatch({
      type: SUNDAY_DELETE_REQUEST,
    })

    const { data } = await axios.delete(`/api/embed/sunday/${id}`)

    dispatch({
      type: SUNDAY_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: SUNDAY_DELETE_FAIL,
      payload: message,
    })
  }
}
