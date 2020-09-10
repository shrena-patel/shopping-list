import React from "react"

class Pic extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="image-container tile is-child notification is-info">
        <img src={this.props.url} className="img" alt={this.props.title} />
      </div>
    )
  }
}

export default Pic
