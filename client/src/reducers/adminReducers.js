import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  EMBED_LINK_REQUEST,
  EMBED_LINK_SUCCESS,
  EMBED_LINK_FAIL,
} from '../constants/adminConstants'

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true }
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, isLoggedIn: true }
    case ADMIN_LOGIN_FAIL:
      return { loading: false, isLoggedIn: false }
    case ADMIN_LOGOUT:
      return { isLoggedIn: false }
    default:
      return state
  }
}

export const embedLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case EMBED_LINK_REQUEST:
      return { loading: true }
    case EMBED_LINK_SUCCESS:
      return { loading: false, embedLink: action.payload }
    case EMBED_LINK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
