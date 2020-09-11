import React from 'react'

import LoadTopStories from './LoadTopStories'
import StoryList from './StoryList'

const TopStories = () => {
    return (
        <>
        <article className="tile is-child">
            <p className="title">Top Stories</p>
            <p className="subtitle">A 'no border' example</p>
            <LoadTopStories />
            <StoryList />
        </article>
        </>
    )
}

export default TopStories