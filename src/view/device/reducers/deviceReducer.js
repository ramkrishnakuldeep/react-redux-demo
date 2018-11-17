import {
  DEVICES_LIST_SUCCESS,
  DEVICES_LIST_FILTER,
} from '../../../constants.js'

const initialState = {
  devices: [],
  filterBy: ''
}

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case DEVICES_LIST_SUCCESS:
      return {
        ...state,
        devices: action.devices
      };
    case DEVICES_LIST_FILTER:
      return {
        ...state,
        filterBy: action.value
      };
    default:
      return { ...state };
  }
}