import {
  IMAGE_CREATE_REQUEST,
  IMAGE_CREATE_SUCCESS,
  IMAGE_CREATE_FAIL,
  IMAGE_CREATE_RESET,
  IMAGE_UPDATE_REQUEST,
  IMAGE_UPDATE_SUCCESS,
  IMAGE_UPDATE_FAIL,
  IMAGE_UPDATE_RESET,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
  IMAGE_GET_REQUEST,
  IMAGE_GET_SUCCESS,
  IMAGE_GET_FAIL,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DELETE_FAIL,
} from '../constants/image'

export const imageCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_CREATE_REQUEST:
      return { loading: true }
    case IMAGE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        image: action.payload,
      }
    case IMAGE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case IMAGE_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const imageUpdateReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case IMAGE_UPDATE_REQUEST:
      return { loading: true }
    case IMAGE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        image: action.payload,
      }
    case IMAGE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case IMAGE_UPDATE_RESET:
      return { image: {} }
    default:
      return state
  }
}
export const imageListReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case IMAGE_LIST_REQUEST:
      return {
        loading: true,
        images: [],
      }
    case IMAGE_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        images: action.payload,
      }
    case IMAGE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const imageDetailsReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case IMAGE_GET_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case IMAGE_GET_SUCCESS:
      return {
        loading: false,
        image: action.payload,
      }
    case IMAGE_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const imageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_DELETE_REQUEST:
      return { loading: true }
    case IMAGE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case IMAGE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
