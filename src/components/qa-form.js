/*TO-DO:
	CHECK IMPORTS
	ACTIONS
	SET UP ELEMENTS (TEMPLATE)
	-CSS formatting	
*/


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, focus } from 'redux-form';
//import { addRack } from '../actions/protected-data';
import './qa-form.css';
import DisplayQuestion from './display-question';

export class Qa extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.addDestination(this.state);
    //this.setState({
    //  answer: ''
    //})
  }

  render(){    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className = "qa-form">
	    <DisplayQuestion />
	    <input type = 'text' className = "input new-line-and-margin" autofocus cols = '38' rows = '1' /*onChange={this.handleAnswer} value={this.state.answer}*//>
            <button type="submit" className = 'new-line-and-margin qa-button'>
              Submit Answer
            </button>
          
	  </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))

})(Qa);


