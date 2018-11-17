import { Switch, Route } from 'react-router-dom'
export default (
  <Switch>
    <Route exact path='/device' component={Devices} />
    <Route path='/device/:id' component={Device} />
  </Switch>
)