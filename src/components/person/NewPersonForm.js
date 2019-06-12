import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from "../auth/ErrorField";
class NewPersonForm extends Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name="firstName" component={ErrorField}/>
          <Field name="lastName" component={ErrorField} type="password"/>
          <Field name="email" component={ErrorField}/>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({email, firstName}) => {
  const errors = {}
  if(!email) errors.email = 'email is required'
  else if(!emailValidator.validate(email)) errors.email = 'invalid email'

  if(!firstName) errors.firstName = 'firstName is required'

  return errors
}

export default reduxForm({
  form: 'people', validate
})(NewPersonForm);