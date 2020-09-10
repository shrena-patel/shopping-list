import request from "superagent"

const apiKey = "dGXdFjaqtDknxoN3eThl13Ac6IamoZegMJIfkbBM"

const placeholder = {
  image: [
    {
      url: "https://miro.medium.com/max/1600/1*zRvYJWeLF5dcxM1G2hcEHA.jpeg",
    },
  ],
}

export function getNasaPhoto() {
  return request
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then((response) => {
      if (response.body.images.length !== 0) {
        return response.body
      } else {
        return placeholder
      }
    })
}
