import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBandList = bands => {
    return bands.map(band => <li key={band.name}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput />
        <ul>Bands: {this.renderBandList(this.props.bands)}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
