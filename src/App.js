import React, { PureComponent } from 'react';
import Header from './components/Header'
import Devices from './view/device/DeviceList'
import './components/css/common.css'
import { Snackbar } from 'react-redux-snackbar';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Devices />
        <Snackbar />
      </div>
    );
  }
}
export default App;
