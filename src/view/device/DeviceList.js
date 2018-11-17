import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as deviceActions from './actions/deviceActions'
import Device from './Device'
import FilterInput from './FilterInput'
import './css/devices.css'
import PropTypes from 'prop-types';


class Devices extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(deviceActions.getDevicesList());
  }
  render() {
    return (
      <React.Fragment>
        <FilterInput />
        <div className="device_heading"> Devices</div>
        <ul className="device_list">
          {this.props.filteredDevices.map((device, i) => <Device key={i} {...device} />)}
        </ul>
      </React.Fragment>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    filteredDevices: state.deviceData.devices.filter((device) => device.name.includes(state.deviceData.filterBy))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deviceActions: bindActionCreators(deviceActions, dispatch),
  }
}

Devices.propTypes = {
  filteredDevices: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Devices)