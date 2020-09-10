import React from 'react'
import Quote from './Quote'

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
  )
}

export default App
