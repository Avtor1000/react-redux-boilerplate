import React, {Component} from 'react';
import PropTypes from 'prop-types'
import SignInForm from "../common/SignInForm";
import {NavLink, Route} from "react-router-dom";
import SignUpForm from "../common/SignUpForm";
import {connect} from 'react-redux'
import {signUp, moduleName} from "../../ducks/auth";
import Loader from "../common/Loader";

class AuthPage extends Component {
  static propTypes = {}
  render() {
    const { loading} = this.props
    return (
      <div>
        <h1>Auth page</h1>
        <NavLink to="/auth/signin" activeStyle={{color: 'red'}}> Sign In</NavLink>
        <NavLink to="/auth/signup" activeStyle={{color: 'red'}}> Sign Up</NavLink>
        <Route path="/auth/signin" render={()=> <SignInForm onSubmit={this.handleSignIn}/>} />
        <Route path="/auth/signup" render={()=> <SignUpForm onSubmit={this.handleSignUp}/>}/>
        {loading && <Loader />}
      </div>
    );
  }
  handleSignIn = ({email, password}) => {this.props.signIn(email, password)}

  handleSignUp = ({email, password}) => {this.props.signUp(email, password)}
}

const mapStateToProps = (state) => ({
  loading: state[moduleName].loading
})

export default connect(mapStateToProps, {signUp})(AuthPage);