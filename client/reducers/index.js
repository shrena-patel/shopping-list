import {combineReducers} from 'redux'

import shopping from './shopping'
import errorMessage from './error-message'
import weather from './weather'
import stories from './stories'

export default combineReducers({
  shopping,
  weather,
  stories,
  errorMessage,
})
