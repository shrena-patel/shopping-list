export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'


export const receiveForecast = (forecast) => {
  return {
    type: RECEIVE_FORECAST,
    weather: forecast
  }
}