import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
class SignInForm extends Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component="input"/>
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" type="password"/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({email, password}) => {
  const errors = {}
  if(!email) errors.email = 'email is required'
  else if(!emailValidator.validate(email)) errors.email = 'invalid email'

  if(!password) errors.password = 'password is required'
  else if(password.length < 5 ) errors.password = 'to short'

  return errors
}

export default reduxForm({
  form: 'auth', validate
})(SignInForm);