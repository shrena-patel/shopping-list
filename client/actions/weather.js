export const receiveForecast = (forecast) => {
  return {
    type: RECEIVE_FORECAST,
    weather: forecast
  }
}