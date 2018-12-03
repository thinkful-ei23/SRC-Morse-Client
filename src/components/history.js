/*TO-DO:
	CHECK IMPORTS
	ACTIONS
	SET UP ELEMENTS (TEMPLATE)
	-CSS formatting	
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
//import { addRack } from '../actions/protected-data';
import './css/history.css';

export class History extends Component {
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

	handleSubmit = e => {
		e.preventDefault();
		//this.props.addDestination(this.state);
		//this.setState({
		//  answer: ''
		//})
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="qa-form">
						<div>[pH] History Display</div>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'answer',
	onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))
})(History);
