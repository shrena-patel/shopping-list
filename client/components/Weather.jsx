import React from 'react'
import { connect } from 'react-redux'
import { receiveForecast, showError } from '../actions'


class Weather extends React.Component {


  render(){
    return (
      <h1>Today's Weather</h1>
    )
  } 
}

export default Weather