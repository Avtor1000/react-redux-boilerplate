import React, {Component} from 'react';
import NewPersonForm from "../person/NewPersonForm";
import {connect} from 'react-redux'

class PersonPage extends Component {
  render() {
    return (
      <div>
        <h2>Add new person</h2>
        <NewPersonForm onSubmit={addPerson}/>
      </div>
    );
  }
}

export default connect(null, {addPerson})( PersonPage);