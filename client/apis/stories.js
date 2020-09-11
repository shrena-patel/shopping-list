import request from 'superagent'

export function fetchStories (subreddit) {
    return request
    .get(`/api/v1/reddit/subreddit/${subreddit}`)
    .then(res => res.body)
}

