import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
} from '../constants/adminConstants'

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true }
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, success: true }
    case ADMIN_LOGIN_FAIL:
      return { loading: false }
    case ADMIN_LOGOUT:
      return {}
    default:
      return state
  }
}
