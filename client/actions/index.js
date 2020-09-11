import request from 'superagent'
import { receiveForecast } from './weather'
import { showError } from './error'

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'
export const SHOW_ERROR = 'SHOW_ERROR'
