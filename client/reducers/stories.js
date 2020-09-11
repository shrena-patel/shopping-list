import {RECEIVE_POSTS} from '../actions/stories'

function stories (state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        default: return state
    }
}

export default stories