// Combine all reducers in the application into one reducer
// import package to combine 
import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
// this has the state to use in the application
import events from './events'

export default combineReducers({ events, form })
