import React from "react";
import { connect } from "react-redux";
import { fetchStories } from "../apis/stories";
import { requestPosts, receivePosts, showError } from "../actions/stories";

class Stories extends React.Component {
  state = {
    inputNewsSub: "news",
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.props.dispatch(requestPosts());
    fetchStories(this.state.inputNewsSub)
      .then((news) => {
        this.props.dispatch(receivePosts(news));
      })
      .catch((err) => {
        this.props.dispatch(showError(err.message));
      });
  };

  handleChange = (event) => {
    this.setState({
      inputNewsSub: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getPosts();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field has-addons">

            <div className="control">
              <input
                className="input"
                type="text"
                onChange={this.handleChange}
                value={this.state.inputNewsSub}
              ></input>
            </div>

            <div className="control">
              <button className="button is-info" onClick={this.handleSubmit}>
                Fetch Posts
              </button>
            </div>
            
          </div>
        </form>

        {this.props.children}
      </div>
    );
  }
}

export default connect()(Stories);

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
