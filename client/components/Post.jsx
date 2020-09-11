import React from 'react'



const Post = ({title, author, permalink}) => (

  <>  
      {/* <a href={permalink} {title}></a> */}

      <a target="_blank" href={(`https://www.reddit.com${permalink}`)}>{title}</a>

      <p>Poster: {author}</p>
      <br></br>
  </>
)

export default Post