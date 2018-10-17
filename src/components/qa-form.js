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
import { getAnswer } from '../actions/answers-feedback';

export class Qa extends Component {
	handleSubmit(values) {
		console.log(values.answer);
		let answer = values.answer;
		this.props.dispatch(getAnswer(answer));
		// this.props.dispatch(getAnswer(values.answer));
	}

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
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							this.handleSubmit(values);
							setSubmitting(false);
						}, 100);
					}}
				>
					{({
						values,
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
	console.log('mapstatetoprops', state.answer);
	// console.log(this.props.state);
	return {
		answer: state.answer.answer
	};
}

const ConnectedAnswer = connect(mapStateToProps)(Qa);
export default ConnectedAnswer;
