import {combineReducers} from 'redux'

import shopping from './shopping'
import weather from './weather'

export default combineReducers({
  shopping,
  weather
})