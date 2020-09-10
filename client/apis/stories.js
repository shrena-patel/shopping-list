import request from 'superagent'

export function getStories (subreddit) {
    return request
    .get(`/api/v1/reddit/subreddit/${subreddit}`)
    .then(res => res.body)
}

