import {
  CREATE_SUNDAY_EMBED_LINK_REQUEST,
  CREATE_SUNDAY_EMBED_LINK_SUCCESS,
  CREATE_SUNDAY_EMBED_LINK_FAIL,
  CREATE_SUNDAY_EMBED_LINK_RESET,
  UPDATE_SUNDAY_EMBED_LINK_REQUEST,
  UPDATE_SUNDAY_EMBED_LINK_SUCCESS,
  UPDATE_SUNDAY_EMBED_LINK_FAIL,
  UPDATE_SUNDAY_EMBED_LINK_RESET,
  LIST_SUNDAY_EMBED_LINK_REQUEST,
  LIST_SUNDAY_EMBED_LINK_SUCCESS,
  LIST_SUNDAY_EMBED_LINK_FAIL,
  GET_SUNDAY_EMBED_LINK_REQUEST,
  GET_SUNDAY_EMBED_LINK_SUCCESS,
  GET_SUNDAY_EMBED_LINK_FAIL,
  DELETE_SUNDAY_EMBED_LINK_REQUEST,
  DELETE_SUNDAY_EMBED_LINK_SUCCESS,
  DELETE_SUNDAY_EMBED_LINK_FAIL,
} from '../constants/sundayConstants'

export const createSundayEmbedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SUNDAY_EMBED_LINK_REQUEST:
      return { loading: true }
    case CREATE_SUNDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        success: true,
        embedLink: action.payload,
      }
    case CREATE_SUNDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CREATE_SUNDAY_EMBED_LINK_RESET:
      return {}
    default:
      return state
  }
}

export const updateSundayEmbedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SUNDAY_EMBED_LINK_REQUEST:
      return { loading: true }
    case UPDATE_SUNDAY_EMBED_LINK_SUCCESS:
      return { loading: false, embedLink: action.payload }
    case UPDATE_SUNDAY_EMBED_LINK_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_SUNDAY_EMBED_LINK_RESET:
      return {}
    default:
      return state
  }
}
export const listSundayEmbedLinkReducer = (
  state = { embedLinks: [] },
  action
) => {
  switch (action.type) {
    case LIST_SUNDAY_EMBED_LINK_REQUEST:
      return {
        loading: true,
        embedLinks: [],
      }
    case LIST_SUNDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        success: true,
        embedLinks: action.payload.embedLinks,
      }
    case LIST_SUNDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const getSundayEmbedLinkReducer = (
  state = { embedLink: {} },
  action
) => {
  switch (action.type) {
    case GET_SUNDAY_EMBED_LINK_REQUEST:
      return {
        loading: true,
        embedLink: {},
      }
    case GET_SUNDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        embedLink: action.payload,
      }
    case GET_SUNDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const deleteSundayEmbedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SUNDAY_EMBED_LINK_REQUEST:
      return { loading: true }
    case DELETE_SUNDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case DELETE_SUNDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
