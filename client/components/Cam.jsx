import React from "react"

class Pic extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="image-container">
        <img src={this.props.url} className="img" alt={this.props.title} />
      </div>
    )
  }
}

export default Pic
