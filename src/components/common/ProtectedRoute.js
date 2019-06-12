import React from 'react';
import {Route} from "react-router-dom";
import {moduleName} from "../../ducks/auth";
import {connect} from 'react-redux'
import UnAuthorized from "./UnAuthorized";

const ProtectedRoute = (props) => {
  const {autorized, component: ProtectedComponent, ...rest} = props

  const renderProtected = (routeProps) => {
    return <ProtectedComponent {...routeProps}/>
  }

  return autorized ?  <Route {...rest} render={renderProtected}/> : <UnAuthorized />

};

const mapStateToProps = (state) => ({
  autorized: !!state[moduleName].user
})

export default connect(mapStateToProps, null, null, {pure: false})(ProtectedRoute);
