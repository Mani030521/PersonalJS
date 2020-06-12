import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { redirectionReducer } from './redirectionReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  redirection: redirectionReducer,
  auth: authReducer,
  project: projectReducer
});

export default rootReducer

// the key name will be the data property on the state object