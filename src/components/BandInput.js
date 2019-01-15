// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        Add a Band:
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' >Name</label>
          <input value={this.state.name} onChange={this.handleChange} type='text' name='name' />
          <button type='submit' >Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band: band })
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
