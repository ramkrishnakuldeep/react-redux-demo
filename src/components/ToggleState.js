import React from 'react';
import PropTypes from 'prop-types';
import './css/toggle.css'

class ToggleState extends React.Component {
  constructor(props) {
    super(props);
    this.activeStatusClicked = this.activeStatusClicked.bind(this);
  }

  activeStatusClicked(e) {
    this.props.handleChange(e.target.checked)
  }

  render() {
    return (
      <label className="switch ml-auto">
        <input type="checkbox" onChange={this.activeStatusClicked} checked={this.props.stateValue} />
        <span className="slider round"></span>
      </label>
    )
  }

}

ToggleState.propTypes = {
  stateValue: PropTypes.bool.isRequired
};


export default ToggleState;