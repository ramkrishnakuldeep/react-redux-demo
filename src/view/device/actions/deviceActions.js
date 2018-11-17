import axios from 'axios'
import { showSnack } from 'react-redux-snackbar';
import { BASE_URL, DEVICES } from '../../../config'
import {
  DEVICES_LIST_SUCCESS,
  DEVICES_LIST_FILTER
} from '../../../constants.js'


export function loadDevicesSuccess(devices) {
  return { type: DEVICES_LIST_SUCCESS, devices }
}

export function filterDevices(value) {
  return { type: DEVICES_LIST_FILTER, value }
}

export function getDevicesList() {
  return function (dispatch) {
    return axios.get(BASE_URL + DEVICES)
      .then((response) => {
        dispatch(loadDevicesSuccess(response.data.data));
      })
      .catch((err) => {
        dispatch(showSnack(err.response.data.status, {
          label: err.response.data.toUpperCase(),
          timeout: 2000,
          button: { label: 'OK' }
        }));
      });
  };
};


export function patchDevice(readingName, stateValue) {
  return function (dispatch) {
    return axios.patch(`${BASE_URL}${DEVICES}/${readingName}?active=${stateValue}`)
      .then((response) => {
        dispatch(getDevicesList())
      })
      .catch((err) => {
        dispatch(showSnack(err.response.data.status, {
          label: err.response.data.toUpperCase(),
          timeout: 2000,
          button: { label: 'OK' }
        }));
      });
  };
};
