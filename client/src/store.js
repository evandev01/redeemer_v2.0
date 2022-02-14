import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { adminLoginReducer, embedLinkReducer } from './reducers/adminReducers'
import {
  createSundayEmbedLinkReducer,
  updateSundayEmbedLinkReducer,
  listSundayEmbedLinkReducer,
  getSundayEmbedLinkReducer,
  deleteSundayEmbedLinkReducer,
} from './reducers/sundayReducers'
import {
  createWednesdayEmbedLinkReducer,
  updateWednesdayEmbedLinkReducer,
  listWednesdayEmbedLinkReducer,
  getWednesdayEmbedLinkReducer,
  deleteWednesdayEmbedLinkReducer,
} from './reducers/wednesdayReducers'

const reducer = combineReducers({
  // Admin Login
  adminLogin: adminLoginReducer,
  // Sunday
  createSundayEmbedLink: createSundayEmbedLinkReducer,
  updateSundayEmbedLink: createSundayEmbedLinkReducer,
  listSundayEmbedLink: listSundayEmbedLinkReducer,
  getSundayEmbedLink: getSundayEmbedLinkReducer,
  deleteSundayEmbedLink: deleteSundayEmbedLinkReducer,
  // Wednesday
  createWednesdayEmbedLink: createWednesdayEmbedLinkReducer,
  updateWednesdayEmbedLink: updateWednesdayEmbedLinkReducer,
  listWednesdayEmbedLink: listWednesdayEmbedLinkReducer,
  getWednesdayEmbedLink: getWednesdayEmbedLinkReducer,
  deleteWednesdayEmbedLink: deleteWednesdayEmbedLinkReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
