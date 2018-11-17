import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as deviceActions from './actions/deviceActions'
import './css/filter.css'
import PropTypes from 'prop-types';


class FilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this)
  }
  onFilter(e) {
    this.props.deviceActions.filterDevices(e.target.value)
  }
  render() {
    return (
      <div className="d-flex filter_toolbar">
        <label htmlFor="">
          <strong> Filter by name: </strong>
        </label>
        <input type="text" value={this.props.filterBy} onChange={this.onFilter} />
        <label className="ml-auto" htmlFor="">
          <strong> Active devices: </strong>
          {this.props.filteredDevices.filter(device => device.active).length}
        </label>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    filteredDevices: state.deviceData.devices.filter((device) => device.name.includes(state.deviceData.filterBy)),
    filterBy: state.filterBy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deviceActions: bindActionCreators(deviceActions, dispatch),
  }
}

FilterInput.propTypes = {
  filteredDevices: PropTypes.array.isRequired,
  filterBy: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput)