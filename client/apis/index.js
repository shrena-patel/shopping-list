import request from 'superagent'

export function getForecast () {
  return request
    .get(`https://api.openweathermap.org/data/2.5/weather?q=Wellington&units=metric&appid=077b3aa63dc24f162caecdf4ce3e3200`)
    .then(res => res.body)
}
