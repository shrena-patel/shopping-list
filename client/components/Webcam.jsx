import React from 'react'

import { fetchWebCamData, fetchNearbyWebcamData } from '../apis/webcam'

class Webcam extends React.Component {
  state = {
      index: 0,
      selectedWebcam: {
          image: {
              current: {
                  preview: ""
              }
          }
      },
      nearbyWebcams: []
    }
 
  componentDidMount() {
    this.getNearbyWebCamData()
  }

  nextWebcam = () => {
        let nextIndex = 0
        if (this.state.index < 7) {
          nextIndex = this.state.index+1
      }
      this.setState({
         selectedWebcam: this.state.nearbyWebcams[nextIndex],
         index: nextIndex
      })
  }

  getNearbyWebCamData = () => {
      fetchNearbyWebcamData()
        .then((webcams) => this.setState({
            nearbyWebcams: webcams.result.webcams,
            selectedWebcam:  webcams.result.webcams[this.state.index]
        })
        )
  }

  getWebCamData = () => {
    fetchWebCamData()
        .then((webcam) => this.setState({
            webcam: webcam.result.webcams[0],
            selectedWebcamImage: webcam.result.webcams[0].image.current.preview
        }) 
        )
  }

  viewWebcam = (index) => {
    this.setState({
        selectedWebcam: this.state.nearbyWebcams[index],
     })
  }

  render() {
    const webcam = this.state.selectedWebcam
    const nearbyWebcams = this.state.nearbyWebcams
    return (
      <>
       <article className="tile card is-child notification">
        <button className="button is-link is-light is-pulled-right" onClick={this.nextWebcam}>Next</button>
        <p>{webcam.title}</p>
        <div className="tile is-child">
            <img src={webcam.image.current.preview} />
        </div>
        <div className="tile is-ancestor webcam-wrapper">
            {nearbyWebcams && nearbyWebcams.map((webcam, index) => {
                return <div key={index} onClick={() => this.viewWebcam(index)} className="tile is-parent is-3">
                    <div className="tile is-child">
                        <img src={webcam.image.current.thumbnail}/>
                    </div>
            </div>})
            }
        </div>
    
       </article>
      </>
    )
  }
}

export default Webcam
