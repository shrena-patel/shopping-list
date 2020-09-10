import React from "react"
import { getNasaPhoto } from "../apis/image"
class Pic extends React.Component {
  state = {
    nasaPhotoInfo: {},
  }

  componentDidMount() {
    this.refreshNasaPhoto()
  }

  refreshNasaPhoto() {
    getNasaPhoto().then((nasaPhotoInfo) => {
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
          <figure>
            <img src={nasaPic.url} className="img" alt={nasaPic.title} />
            <figcaption>{nasaPic.title}</figcaption>
          </figure>
        </div>
      </>
    )
  }
}

export default Pic
