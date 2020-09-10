import React from 'react'
import { connect } from 'react-redux'
import { receiveForecast } from '../actions/weather'
import { showError } from '../actions/error'
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
      <article className="tile is-child notification is-warning">
        <p className="title">Weather</p>
        <h1 className='subtitle'>Today's Weather in {this.props.weather.name}</h1>
        <p className='mb-1'><span className="has-text-weight-bold">Current Conditions:</span> {this.props.weather.weather && (this.props.weather?.weather[0].description)}</p>
        <p className='mb-3'>It feels like {this.props.weather?.main?.feels_like}&#8451; out there.</p>
        <p className='mb-1'><span className="has-text-weight-bold">Current Temperature:</span> {this.props.weather?.main?.temp}&#8451;</p>
        <p className='mb-1'><span className="has-text-weight-bold">High:</span> {this.props.weather?.main?.temp_max}&#8451;</p>
        <p className='mb-1'><span className="has-text-weight-bold">Low:</span> {this.props.weather?.main?.temp_min}&#8451;</p>
       
        
        {this.props.weather.weather && console.log(this.props.weather?.weather[0].description)}
      </article>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Weather)
