import axios from 'axios'
import {
  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
} from '../constants/event'

export const listEvents = () => async dispatch => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST })

    const { data } = await axios.get('/api/events')

    dispatch({
      type: EVENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listEventDetails = id => async dispatch => {
  try {
    dispatch({ type: EVENT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/events/${id}`)

    dispatch({
      type: EVENT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EVENT_DETAILS_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createEvent = () => async dispatch => {
  try {
    dispatch({ type: EVENT_CREATE_REQUEST })

    const { data } = await axios.post('/api/events', {})

    dispatch({
      type: EVENT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EVENT_CREATE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateEvent = event => async dispatch => {
  try {
    dispatch({ type: EVENT_UPDATE_REQUEST })

    const { data } = await axios.put(`/api/events/${event._id}`, event)

    dispatch({
      type: EVENT_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EVENT_UPDATE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteEvent = id => async dispatch => {
  try {
    dispatch({ type: EVENT_DELETE_REQUEST })

    await axios.delete(`/api/events/${id}`)

    dispatch({ type: EVENT_DELETE_SUCCESS })
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
