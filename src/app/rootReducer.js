import { combineReducers } from '@reduxjs/toolkit'
import userReducer from '../redux/user/userReducer'
import loginuserReducer from '../redux/loginuser/loginuserReducer'

const rootReducer = combineReducers({
    user :userReducer,
    loginuser : loginuserReducer
})

export default rootReducer