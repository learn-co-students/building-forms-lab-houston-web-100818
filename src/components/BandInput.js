import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name);
    this.setState({ name: "" });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", payload: band })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BandInput);
