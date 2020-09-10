import React from 'react'
<<<<<<< HEAD
import ShoppingList from './ShoppingList'
||||||| 09e8c2b
// import ShoppingList from './ShoppingList'
=======
>>>>>>> 4d6141ff637f8fae20ca6cd0f7aa4ca5190d3da1

import Nav from './Nav'
import Weather from './Weather'
import Webcam from './Webcam'
import TopStories from './TopStories'
import Quote from './Quote'
import ShoppingList from './ShoppingList'
import TodoList from './TodoList'
import Pic from './Pic'

const App = () => {
  return (
    <>
<<<<<<< HEAD
    
  
    <ShoppingList />
   
   
    {/* <Quote/> */}
    </>
||||||| 09e8c2b
    
  
    {/* <ShoppingList /> */}
   
    <h1>Dashboard development has begun!</h1>
    {/* <Quote/> */}
    </>
=======
      <Nav />
      <section className="section">
          <div className="container">
              <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                  <div className="tile">
                      <div className="tile is-parent is-vertical">
                          <Weather />
                          <Webcam />
                      </div>
                      <div className="tile is-parent">
                          <TopStories />
                      </div>
                  </div>
                  <div className="tile is-parent">
                      <Quote />
                  </div>
              </div>
              <div className="tile is-vertical is-4">
                  <div className="tile">
                      <div className="tile is-parent">
                        <ShoppingList />
                      </div>
                      <div className="tile is-parent">
                        <TodoList />
                      </div>
                  </div>
                  <div className="tile is-parent">
                      <Pic/>
                  </div>
              </div>
              </div>
          </div>
      </section>
      </>
>>>>>>> 4d6141ff637f8fae20ca6cd0f7aa4ca5190d3da1
  )
}

export default App
