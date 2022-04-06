import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/user'
import {
  sundayCreateReducer,
  sundayUpdateReducer,
  sundayListReducer,
  sundayDetailsReducer,
  sundayDeleteReducer,
} from './reducers/sunday'
import {
  wedCreateReducer,
  wedUpdateReducer,
  wedListReducer,
  wedDetailsReducer,
  wedDeleteReducer,
} from './reducers/wednesday'
import {
  eventCreateReducer,
  eventListReducer,
  eventDetailsReducer,
  eventUpdateReducer,
  eventDeleteReducer,
} from './reducers/event'
import {
  imageCreateReducer,
  imageListReducer,
  imageDetailsReducer,
  imageUpdateReducer,
  imageDeleteReducer,
} from './reducers/image'

const reducer = combineReducers({
  // User
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  // Sunday
  sundayCreate: sundayCreateReducer,
  sundayUpdate: sundayUpdateReducer,
  sundayList: sundayListReducer,
  sundayDetails: sundayDetailsReducer,
  sundayDelete: sundayDeleteReducer,
  // Wednesday
  wedCreate: wedCreateReducer,
  wedUpdate: wedUpdateReducer,
  wedList: wedListReducer,
  wedDetails: wedDetailsReducer,
  wedDelete: wedDeleteReducer,
  // Event
  eventCreate: eventCreateReducer,
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  eventUpdate: eventUpdateReducer,
  eventDelete: eventDeleteReducer,
  // Image
  imageCreate: imageCreateReducer,
  imageList: imageListReducer,
  imageDetails: imageDetailsReducer,
  imageUpdate: imageUpdateReducer,
  imageDelete: imageDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
