import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './css/toggle.css'

class ToggleState extends PureComponent {
  constructor() {
    super();
  }

  activeStatusClicked = (e) => {
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