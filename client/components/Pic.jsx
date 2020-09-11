import React from "react"
import { getNasaPhoto } from "../apis/image"
class Pic extends React.Component {
  state = {
    nasaPhotoInfo: {},
  }

  componentDidMount() {
    this.refreshNasaPhoto()
  }

  handleChange = (event) => {
    this.setState({ date: event.target.value }, this.refreshNasaPhoto)
  }

  refreshNasaPhoto() {
    getNasaPhoto(this.state.date).then((nasaPhotoInfo) => {
      this.setState({
        nasaPhotoInfo: nasaPhotoInfo,
      })
    })
  }

  render() {
    const nasaPic = this.state.nasaPhotoInfo
    return (
      <>
        <div className="image-container tile is-child notification is-info">
          <p className="title">Pic of the day</p>
          <div className="field has-addons">
            <input
              className="input is-small is-rounded my-3"
              type="date"
              id="input-date-for-picture"
              value={this.state.value}
              min="1980-01-01"
              max="2020-09-10"
              onChange={this.handleChange}
            ></input>
          </div>
          <figure>
            <img src={nasaPic.url} className="img" alt={nasaPic.title} />
            <figcaption>{nasaPic.title}</figcaption>
            {/* <figcaption className="show">{nasaPic.explanation}</figcaption> */}
          </figure>
        </div>
      </>
    )
  }
}

export default Pic
