import {
  CREATE_WEDNESDAY_EMBED_LINK_REQUEST,
  CREATE_WEDNESDAY_EMBED_LINK_SUCCESS,
  CREATE_WEDNESDAY_EMBED_LINK_FAIL,
  CREATE_WEDNESDAY_EMBED_LINK_RESET,
  UPDATE_WEDNESDAY_EMBED_LINK_REQUEST,
  UPDATE_WEDNESDAY_EMBED_LINK_SUCCESS,
  UPDATE_WEDNESDAY_EMBED_LINK_FAIL,
  UPDATE_WEDNESDAY_EMBED_LINK_RESET,
  LIST_WEDNESDAY_EMBED_LINK_REQUEST,
  LIST_WEDNESDAY_EMBED_LINK_SUCCESS,
  LIST_WEDNESDAY_EMBED_LINK_FAIL,
  GET_WEDNESDAY_EMBED_LINK_REQUEST,
  GET_WEDNESDAY_EMBED_LINK_SUCCESS,
  GET_WEDNESDAY_EMBED_LINK_FAIL,
  DELETE_WEDNESDAY_EMBED_LINK_REQUEST,
  DELETE_WEDNESDAY_EMBED_LINK_SUCCESS,
  DELETE_WEDNESDAY_EMBED_LINK_FAIL,
} from '../constants/wednesdayConstants'

export const createWednesdayEmbedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_WEDNESDAY_EMBED_LINK_REQUEST:
      return { loading: true }
    case CREATE_WEDNESDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        success: true,
        embedLink: action.payload,
      }
    case CREATE_WEDNESDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CREATE_WEDNESDAY_EMBED_LINK_RESET:
      return {}
    default:
      return state
  }
}

export const updateWednesdayEmbedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WEDNESDAY_EMBED_LINK_REQUEST:
      return { loading: true }
    case UPDATE_WEDNESDAY_EMBED_LINK_SUCCESS:
      return { loading: false, embedLink: action.payload }
    case UPDATE_WEDNESDAY_EMBED_LINK_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_WEDNESDAY_EMBED_LINK_RESET:
      return {}
    default:
      return state
  }
}
export const listWednesdayEmbedLinkReducer = (
  state = { embedLinks: [] },
  action
) => {
  switch (action.type) {
    case LIST_WEDNESDAY_EMBED_LINK_REQUEST:
      return {
        loading: true,
        embedLinks: [],
      }
    case LIST_WEDNESDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        success: true,
        embedLinks: action.payload.embedLinks,
      }
    case LIST_WEDNESDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const getWednesdayEmbedLinkReducer = (
  state = { embedLink: {} },
  action
) => {
  switch (action.type) {
    case GET_WEDNESDAY_EMBED_LINK_REQUEST:
      return {
        loading: true,
        embedLink: {},
      }
    case GET_WEDNESDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        embedLink: action.payload,
      }
    case GET_WEDNESDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const deleteWednesdayEmbedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_WEDNESDAY_EMBED_LINK_REQUEST:
      return { loading: true }
    case DELETE_WEDNESDAY_EMBED_LINK_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case DELETE_WEDNESDAY_EMBED_LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
