import request from "superagent"

export function fetchWebCamData() {
  return request
    .get(`https://api.windy.com/api/webcams/v2/list/webcam=1349899235?show=webcams:location,image`)
    .set('x-windy-key', '9RDMCcRMR3jvs5b7rK4vMu4OBLP8lubU')
    .then((response) => response.body) 
}

export function fetchNearbyWebcamData() {
  return request
    .get('https://api.windy.com/api/webcams/v2/list/nearby=-41.2969092,174.7742193,6?show=webcams:location,image')
    .set('x-windy-key', '9RDMCcRMR3jvs5b7rK4vMu4OBLP8lubU')
    .then((response) => response.body) 
}