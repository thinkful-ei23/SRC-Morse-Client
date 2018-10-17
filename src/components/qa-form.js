/*TO-DO:
	CHECK IMPORTS
	ACTIONS
	SET UP ELEMENTS (TEMPLATE)
	-CSS formatting	
*/

import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Answers from './answer-feedback';
import { connect } from 'react-redux';
import { getAnswer } from '../actions/answers-feedback';

//import { addRack } from '../actions/protected-data';
import './qa-form.css';

export class Qa extends Component {
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
	onSubmit(e) {
		e.preventDefault();
		console.log(e.target.value);
		// this.setState({ answer: values.answer });
		// e.preventDefault();
		//this.props.addDestination(this.state);
		//this.setState({
		//  answer: ''
		//})
	}

	render() {
		return (
			<div className="qa-form">
				<div>[pH] Question Display</div>
				<form onSubmit={e => this.onSubmit(e)}>
					<label>
						My answer is:
						<input type="text" name="answer" />
					</label>
					<input
						type="submit"
						value="Submit Answer"
						disabled={this.pristine || this.submitting}
					/>
				</form>
				<Answers />
			</div>
		);
	}
}

Qa = connect()(Qa);

function mapStateToProps(state) {
	console.log('mapstatetoprops');
	// console.log(this.props.state);
	return {
		answers: state.answers
	};
}
const ConnectedAnswer = connect(mapStateToProps)(Qa);
export default ConnectedAnswer;
