/*TO-DO:
	CHECK IMPORTS
	ACTIONS
	SET UP ELEMENTS (TEMPLATE)
	-CSS formatting	
*/

import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import Answers from './answer-feedback';
//import { addRack } from '../actions/protected-data';
import './qa-form.css';

export class Qa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: ''
		};
	}
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
	onSubmit(values) {
		// console.log(values.answer);
		this.setState({ answer: values.answer });
		// e.preventDefault();
		//this.props.addDestination(this.state);
		//this.setState({
		//  answer: ''
		//})
	}

	render() {
		console.log('value is', this.state.answer);
		return (
			<div className="qa-form">
				<div>[pH] Question Display</div>
				<form
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
				>
					<Field
						label="My answer is: "
						name="answer"
						id="answer"
						component={Input}
						type="text"
						className="input new-line-and-margin"
						autoFocus
						cols="38"
						rows="1" /*onChange={this.handleAnswer} value={this.state.answer}*/
					/>
					<button
						type="submit"
						className="new-line-and-margin qa-button"
						disabled={this.pristine || this.submitting}
					>
						Submit Answer
					</button>
				</form>
				<Answers value={this.state.answer} />
			</div>
		);
	}
}

export default reduxForm({
	form: 'answer',
	onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))
})(Qa);
