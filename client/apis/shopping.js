import request from 'superagent'

export function getAllItems () {
    return request
    .get('/v1/items')
    .then(response => response.body)

}

export function apiAddItem (item) {
    return request
    .post('/v1/items')
    .send(item)
    .then(response => response.body.id)
}

export function apiDeleteItem (id) {
    return request
    .delete('/v1/items/' + id)
    .then(response => response.body)

}