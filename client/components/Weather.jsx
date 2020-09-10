import React from 'react'
import { connect } from 'react-redux'
import { receiveForecast, showError } from '../actions'
import { getForecast } from '../apis'


class Weather extends React.Component {

  state = {
    weather: ''
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather = () => {
    getForecast()
      .then(forecast => {
        // console.log(forecast)
        this.props.dispatch(receiveForecast(forecast))
        
      })
      .catch(err => {
        this.props.dispatch(showError(err.message))
      })
  }

  render(){
    return (
      <h1 className='subtitle'>Today's Weather in {this.props.weather.name}</h1>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Weather)
