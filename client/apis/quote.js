import request from 'superagent'

const quoteUrl = 'https://programming-quotes-api.herokuapp.com'

export function getQuote () {
  return request
    .get(quoteUrl + "/quotes/random")
    .then(response => response.body)
}