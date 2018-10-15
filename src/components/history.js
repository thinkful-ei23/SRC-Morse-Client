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
import './history.css';

class history extends Component {
	  //onSubmit(values) {
    //return this.props.dispatch(addRack( values.latitude, values.longitude));
  //}

  //state = {
   //latitude: null, longitude: null
  //}


 //handleAnswer = (e) => {
    //this.setState({
      //answer: e.target.value
    //})
  //}



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
	    <div>[pH] Question Display</div>
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

})(history);



