import {combineReducers} from 'redux'

import errorMessage from './error-message'
import weather from './weather'
import stories from './stories'

export default combineReducers({
  // errorMessage,
  weather,
  stories,
  errorMessage,
})
