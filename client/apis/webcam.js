import request from "superagent"

export function fetchWebCamData() {
  return request
    .get(`https://api.windy.com/api/webcams/v2/list/webcam=1349899235?show=webcams:location,image`)
    .set('x-windy-key', '9RDMCcRMR3jvs5b7rK4vMu4OBLP8lubU')
    .then((response) => response.body) 
}
