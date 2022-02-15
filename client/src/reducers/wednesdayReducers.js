import {
  WED_CREATE_REQUEST,
  WED_CREATE_SUCCESS,
  WED_CREATE_FAIL,
  WED_CREATE_RESET,
  WED_UPDATE_REQUEST,
  WED_UPDATE_SUCCESS,
  WED_UPDATE_FAIL,
  WED_UPDATE_RESET,
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

export const wedCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WED_CREATE_REQUEST:
      return { loading: true }
    case WED_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        wednesday: action.payload,
      }
    case WED_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case WED_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const wedUpdateReducer = (state = { wednesday: {} }, action) => {
  switch (action.type) {
    case WED_UPDATE_REQUEST:
      return { loading: true }
    case WED_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        wednesday: action.payload,
      }
    case WED_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case WED_UPDATE_RESET:
      return { wednesday: {} }
    default:
      return state
  }
}
export const wedListReducer = (state = { wednesdays: [] }, action) => {
  switch (action.type) {
    case WED_LIST_REQUEST:
      return {
        loading: true,
        wednesdays: [],
      }
    case WED_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        wednesdays: action.payload,
      }
    case WED_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const wedGetReducer = (state = { wednesday: {} }, action) => {
  switch (action.type) {
    case WED_GET_REQUEST:
      return {
        loading: true,
        wednesday: {},
      }
    case WED_GET_SUCCESS:
      return {
        loading: false,
        wednesday: action.payload,
      }
    case WED_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const wedDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WED_DELETE_REQUEST:
      return { loading: true }
    case WED_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case WED_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
