import request from "superagent"

const apiKey = "dGXdFjaqtDknxoN3eThl13Ac6IamoZegMJIfkbBM"

const placeholder = {
  url: "https://miro.medium.com/max/1600/1*zRvYJWeLF5dcxM1G2hcEHA.jpeg",
}

export function getNasaPhoto(date = "2020-09-09") {
  return request
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
    .then((response) => {
      if (response.body.url) {
        return response.body
      } else {
        return placeholder
      }
    })
    .catch((err) => {
      console.log(err)
      return placeholder
    })
}
