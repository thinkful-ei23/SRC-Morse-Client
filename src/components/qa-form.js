/*TO-DO:
	CHECK IMPORTS
	ACTIONS
	SET UP ELEMENTS (TEMPLATE)
	-CSS formatting	
*/

import React, { Component } from 'react';
// import Answers from './answer-feedback';
import { connect } from 'react-redux';
import { Formik } from 'formik';
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
	handleSubmit(values) {
		console.log(values);
	}

	// onSubmit(e) {
	// 	e.preventDefault();
	// 	console.log(e.target.value);
	// this.setState({ answer: values.answer });
	// e.preventDefault();
	//this.props.addDestination(this.state);
	//this.setState({
	//  answer: ''
	//})

	render() {
		// console.log('value is', this.state.answer);
		return (
			<div className="qa-form">
				<div>[pH] Question Display</div>
				<Formik
					initialValues={{ answer: '' }}
					validate={values => {
						let errors = {};
						if (!values.answer) {
							errors.answer = 'Required';
						}
						return errors;
					}}
					onSubmit={values => this.handleSubmit(values)}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<input
								type="answer"
								name="answer"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							<button type="submit" disabled={isSubmitting}>
								Submit Answer
							</button>
						</form>
					)}
				</Formik>
				{/* <Answers /> */}
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
