import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'


// 2. we then map over the data and define each post as 'post', and give the i value as key
// title then becomes the posts title property
const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.slice(0, 5).map((post, i) =>
        <Post
          key={i}
          title={post.title}
          author={post.author}
          permalink={post.permalink}
        />
    )}
  </div>
)

// 1. we are assigning the subreddits global state to a prop in this file
const mapStateToProps = (state) => {
  return {
    subreddits: state.stories
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
