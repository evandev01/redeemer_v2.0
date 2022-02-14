import axios from 'axios'
import {
  CREATE_SUNDAY_EMBED_LINK_REQUEST,
  CREATE_SUNDAY_EMBED_LINK_SUCCESS,
  CREATE_SUNDAY_EMBED_LINK_FAIL,
  UPDATE_SUNDAY_EMBED_LINK_REQUEST,
  UPDATE_SUNDAY_EMBED_LINK_SUCCESS,
  UPDATE_SUNDAY_EMBED_LINK_FAIL,
  LIST_SUNDAY_EMBED_LINK_REQUEST,
  GET_SUNDAY_EMBED_LINK_REQUEST,
  GET_SUNDAY_EMBED_LINK_SUCCESS,
  GET_SUNDAY_EMBED_LINK_FAIL,
  DELETE_SUNDAY_EMBED_LINK_REQUEST,
  DELETE_SUNDAY_EMBED_LINK_SUCCESS,
  DELETE_SUNDAY_EMBED_LINK_FAIL,
} from '../constants/sundayConstants'

export const createSundayEmbedLink = embedLink => async dispatch => {
  try {
    dispatch({
      type: CREATE_SUNDAY_EMBED_LINK_REQUEST,
    })

    const { data } = await axios.post('/embed/sunday', embedLink)

    dispatch({
      type: CREATE_SUNDAY_EMBED_LINK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: CREATE_SUNDAY_EMBED_LINK_FAIL,
      payload: message,
    })
  }
}

export const updateSundayEmbedLink = (id, embedLink) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_SUNDAY_EMBED_LINK_REQUEST,
    })

    const { data } = await axios.put(`/embed/sunday/${id}`, embedLink)

    dispatch({
      type: UPDATE_SUNDAY_EMBED_LINK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: UPDATE_SUNDAY_EMBED_LINK_FAIL,
      payload: message,
    })
  }
}

export const listSundayEmbedLinks = () => async dispatch => {
  try {
    dispatch({
      type: LIST_SUNDAY_EMBED_LINK_REQUEST,
    })

    const { data } = await axios.get('/embed/sunday')

    dispatch({
      type: CREATE_SUNDAY_EMBED_LINK_SUCCESS,
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

export const getSundayEmbedLink = id => async dispatch => {
  try {
    dispatch({
      type: GET_SUNDAY_EMBED_LINK_REQUEST,
    })

    const { data } = await axios.get(`/embed/sunday/${id}`)

    dispatch({
      type: GET_SUNDAY_EMBED_LINK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: GET_SUNDAY_EMBED_LINK_FAIL,
      payload: message,
    })
  }
}

export const deleteSundayEmbedLink = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_SUNDAY_EMBED_LINK_REQUEST,
    })

    const { data } = await axios.delete(`/embed/sunday/${id}`)

    dispatch({
      type: DELETE_SUNDAY_EMBED_LINK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = `Update failed. Please try again.\nIf the issue persists, please contact your developing administrator.`
    dispatch({
      type: DELETE_SUNDAY_EMBED_LINK_FAIL,
      payload: message,
    })
  }
}
