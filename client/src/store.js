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
  sundayGetReducer,
  sundayDeleteReducer,
} from './reducers/sunday'
import {
  wedCreateReducer,
  wedUpdateReducer,
  wedListReducer,
  wedGetReducer,
  wedDeleteReducer,
} from './reducers/wednesday'

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
  sundayGet: sundayGetReducer,
  sundayDelete: sundayDeleteReducer,
  // Wednesday
  wedCreate: wedCreateReducer,
  wedUpdate: wedUpdateReducer,
  wedList: wedListReducer,
  wedGet: wedGetReducer,
  wedDelete: wedDeleteReducer,
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
