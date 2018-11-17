import { combineReducers } from 'redux'
import deviceData from '../view/device/reducers/deviceReducer'
import { snackbarReducer } from 'react-redux-snackbar';

const rootReducer = combineReducers({
  deviceData,
  snackbar: snackbarReducer
});

export default rootReducer; 