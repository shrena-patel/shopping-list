import React from 'react'

import LoadTopStories from './LoadTopStories'
import StoryList from './StoryList'

const TopStories = () => {
    return (
        <>
        <article className="tile is-child">
            <p className="title">Top Stories</p>
            <LoadTopStories /><br></br>
            <StoryList />
        </article>
        </>
    )
}

export default TopStories