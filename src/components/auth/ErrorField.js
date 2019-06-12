import React, {Component} from 'react';

class ErrorField extends Component {
  render() {
    console.log(this.props)
    const {input, type, meta: {error, touched}} = this.props
    const errorText = touched && error && <div style={{color: 'red'}}> {error} </div>
    return (
      <div>
        <label>{input.name}</label>
        < input type={type} {...input}/>
        {errorText}
      </div>
    );
  }
}

export default ErrorField;