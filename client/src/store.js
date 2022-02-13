import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { adminLoginReducer, embedLinkReducer } from './reducers/adminReducers'

const reducer = combineReducers({
  // Admin Login
  adminLogin: adminLoginReducer,
  embedLink: embedLinkReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
