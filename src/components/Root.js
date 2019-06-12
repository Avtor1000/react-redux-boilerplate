import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import AdminPage from "./routes/AdminPage";
import AuthPage from "./routes/AuthPage";
import ProtectedRoute from "./common/ProtectedRoute";

class Root extends Component {
  static propTypes = {}
  render() {
    return (
      <Switch>
        <Route path="/auth" component={AuthPage}/>
        <ProtectedRoute path="/admin" component={AdminPage}/>
      </Switch>
    );
  }
}

export default Root;