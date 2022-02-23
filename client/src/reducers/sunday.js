import {
  SUNDAY_CREATE_REQUEST,
  SUNDAY_CREATE_SUCCESS,
  SUNDAY_CREATE_FAIL,
  SUNDAY_CREATE_RESET,
  SUNDAY_UPDATE_REQUEST,
  SUNDAY_UPDATE_SUCCESS,
  SUNDAY_UPDATE_FAIL,
  SUNDAY_UPDATE_RESET,
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

export const sundayCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUNDAY_CREATE_REQUEST:
      return { loading: true }
    case SUNDAY_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        sunday: action.payload,
      }
    case SUNDAY_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case SUNDAY_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const sundayUpdateReducer = (state = { sunday: {} }, action) => {
  switch (action.type) {
    case SUNDAY_UPDATE_REQUEST:
      return { loading: true }
    case SUNDAY_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        sunday: action.payload,
      }
    case SUNDAY_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case SUNDAY_UPDATE_RESET:
      return { sunday: {} }
    default:
      return state
  }
}
export const sundayListReducer = (state = { sundays: [] }, action) => {
  switch (action.type) {
    case SUNDAY_LIST_REQUEST:
      return {
        loading: true,
        sundays: [],
      }
    case SUNDAY_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        sundays: action.payload,
      }
    case SUNDAY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const sundayGetReducer = (state = { sunday: {} }, action) => {
  switch (action.type) {
    case SUNDAY_GET_REQUEST:
      return {
        loading: true,
        sunday: {},
      }
    case SUNDAY_GET_SUCCESS:
      return {
        loading: false,
        sunday: action.payload,
      }
    case SUNDAY_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const sundayDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUNDAY_DELETE_REQUEST:
      return { loading: true }
    case SUNDAY_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case SUNDAY_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
