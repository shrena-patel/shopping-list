import React from 'react'
import request from 'superagent'
import {connect} from 'react-redux'
import { getStories } from '../apis/stories'

class Stories extends React.Component {

    state = {
        inputNewsSub: "news"
    }

    componentDidMount(){
        
      }
    
      getPosts = () => {
        this.props.dispatch(requestPosts())
        fetchPosts(this.state.inputNewsSub)           
          .then(news => {                   //subreddits are the posts from the above subreddit
            console.log(news)
            //we dispatch/send the subreddits data in the .then block to the reducers(global state) and uses the receivePosts action on the data
            //subreddits.js is expecting the receivePosts(RECEIVE_POSTS) action (go to reducers/subreddits.js)
            this.props.dispatch(receivePosts(news))    
          })
          .catch(err => {
            this.props.dispatch(showError(err.message))
          })
      }
  
      handleChange = (event) => {
        this.setState({
          inputNewsSub: event.target.value
        });
      }
  
      handleSubmit = (event) => {
        event.preventDefault();
        this.getStories()
      }
  
    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" onChange={this.handleChange} value={this.state.inputNewsSub}></input>
            </label>
            <button onClick={this.handleSubmit}>Fetch Posts</button>
          </form>  
          {this.props.children}
        </div>
      )
    }

}

export default connect()(Stories)







/*
REDUX STEPS v2 :P
4 - dispatch an action (see in dev tools)
    - props.dispatch in onClick
    - action creator to provide the action {}
1 - put in a reducer
2 - see the reducer in the global state (aka in dev tools)
5 - add a case to the reducer (to match action)
3 - use that state in a component
    - mapState2Props
    - something in my render uses that prop
    - if change initial state in reducer, rendering should change on refresh
6 - watch the magic happen!
*/