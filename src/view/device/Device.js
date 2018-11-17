import React from 'react'
import { connect } from 'react-redux';
import * as deviceActions from './actions/deviceActions'
import moment from 'moment';
import './css/device.css'
import ToggleState from '../../components/ToggleState'
import PropTypes from 'prop-types';


class Device extends React.Component {
  constructor(props) {
    super(props);
    this.onStatusChanged = this.onStatusChanged.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.getValueFloored = this.getValueFloored.bind(this);
  }
  onStatusChanged(value) {
    this.props.dispatch(deviceActions.patchDevice(this.props.name, value));
  }

  getFormattedDate(date) {
    return moment(date).format('MM/DD/YY HH:mm:ss');
  }

  getValueFloored(value) {
    return parseFloat(value).toFixed(2);
  }

  render() {
    return (
      <li className="d-flex">
        <div className="">
          <div className="d-flex">
            <label htmlFor="">
              <strong>Device Name: </strong> {this.props.name}
            </label>
            <span className="device_value">
              <strong>Value: </strong><em> {this.props.value} {this.props.unit}</em>
            </span>
          </div>
          <span>
            <strong>Date: </strong>  <em>{this.getFormattedDate(this.props.timestamp)} </em>
          </span>
        </div>
        <ToggleState handleChange={this.onStatusChanged} stateValue={this.props.active} />
      </li>
    )
  }
}

Device.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

export default connect()(Device)