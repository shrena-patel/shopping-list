import { RECEIVE_FORECAST } from '../actions'

function weather (state = [], action) {
  switch (action.type) {
    case RECEIVE_FORECAST:
      return action.weather

    default:
      return state
  }
}

export default weather