import React from 'react'

import { fetchWebCamData } from '../apis/webcam'

class Webcam extends React.Component {
  state ={
      image: '',
      webcam: { 
          image: {
              current: {
                  icon: ""
              }
          }
    }
  }
  componentDidMount() {
    this.getWebCamData()
  }
  getWebCamData = () => {
    fetchWebCamData()
        .then((webcam) => this.setState({
            webcam: webcam.result.webcams[0],
            image: webcam.result.webcams[0].image.current.preview
        }) 
        )
  }

  render() {
    const webcam = this.state.webcam
    const image = this.state.image
    return (
      <>
       <article className="tile card is-child notification">
        <p className="title is-6">{webcam.title}</p>
        {image && <img src={image} className="img"/>}
       </article>
      </>
    )
  }
}

export default Webcam
