import axios from 'axios'
import {
  WED_CREATE_REQUEST,
  WED_CREATE_SUCCESS,
  WED_CREATE_FAIL,
  WED_UPDATE_REQUEST,
  WED_UPDATE_SUCCESS,
  WED_UPDATE_FAIL,
  WED_LIST_REQUEST,
  WED_LIST_SUCCESS,
  WED_LIST_FAIL,
  WED_GET_REQUEST,
  WED_GET_SUCCESS,
  WED_GET_FAIL,
  WED_DELETE_REQUEST,
  WED_DELETE_SUCCESS,
  WED_DELETE_FAIL,
} from '../constants/wednesdayConstants'

export const createWednesday = wednesday => async dispatch => {
  try {
    dispatch({
      type: WED_CREATE_REQUEST,
    })

    const { data } = await axios.post('/api/wednesday', wednesday)

    dispatch({
      type: WED_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: WED_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateWednesday = wednesday => async dispatch => {
  const id = wednesday._id
  try {
    dispatch({
      type: WED_UPDATE_REQUEST,
    })

    const { data } = await axios.put(`/api/wednesday/${id}`, wednesday)

    dispatch({
      type: WED_UPDATE_SUCCESS,
      loading: false,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: WED_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const listWednesdays = () => async dispatch => {
  try {
    dispatch({
      type: WED_LIST_REQUEST,
    })

    const { data } = await axios.get('/api/wednesday')

    dispatch({
      type: WED_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: WED_LIST_FAIL,
      payload: message,
    })
  }
}

export const getWednesday = id => async dispatch => {
  try {
    dispatch({
      type: WED_GET_REQUEST,
    })

    const { data } = await axios.get(`/api/wednesday/${id}`)

    dispatch({
      type: WED_GET_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: WED_GET_FAIL,
      payload: message,
    })
  }
}

export const deleteWednesday = id => async dispatch => {
  try {
    dispatch({
      type: WED_DELETE_REQUEST,
    })

    const { data } = await axios.delete(`/api/wednesday/${id}`)

    dispatch({
      type: WED_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: WED_DELETE_FAIL,
      payload: message,
    })
  }
}
