import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../actions/addBand'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map( (band, key) => 
            <li key={key}>{band.name}</li>
            )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

export default connect(mapStateToProps, {addBand})(BandsContainer)
