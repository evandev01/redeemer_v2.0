import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { adminLoginReducer } from './reducers/adminReducers'
import {
  sundayCreateReducer,
  sundayUpdateReducer,
  sundayListReducer,
  sundayGetReducer,
  sundayDeleteReducer,
} from './reducers/sundayReducers'
import {
  wedCreateReducer,
  wedUpdateReducer,
  wedListReducer,
  wedGetReducer,
  wedDeleteReducer,
} from './reducers/wednesdayReducers'

const reducer = combineReducers({
  // Admin Login
  adminLogin: adminLoginReducer,
  // Sunday
  sundayCreate: sundayCreateReducer,
  sundayUpdate: sundayUpdateReducer,
  sundayList: sundayListReducer,
  sundayGet: sundayGetReducer,
  sundayDelete: sundayDeleteReducer,
  // Wednesday
  wedCreate: wedCreateReducer,
  wedUpdate: wedUpdateReducer,
  wedList: wedListReducer,
  wedGet: wedGetReducer,
  wedDelete: wedDeleteReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
