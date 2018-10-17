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
// import { DisplayQuestions } from './display-question'; tried to put question in its own component

export class Qa extends Component {

	handleSubmit(values) {
		console.log(values.answer);
		let answer = values.answer;
    this.props.dispatch(getAnswer(answer));
		// this.props.dispatch(getAnswer(values.answer));
	}

	render() {
    // console.log('value is', this.state.answer);
    /**********Used to add questions********** */
    const questionObject = this.props.questions;
    if (!questionObject) {
      return <div>loading...</div>
    }
    // console.log(questionObject)
    const askQuestion = Object.keys(questionObject[0])[0]
    // console.log(`What word is this ${Object.keys(questionObject[0])[0]}?`);
    /************************************ */
		return (
			<div className="qa-form">
        <label>What is the word for this {askQuestion}</label>
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
	console.log('mapstatetoprops', state);
	console.log('mapstatetoprops', state.answer);
	return {
    answer: state.answer.answer,
    questions: state.question.question
	};
}

const ConnectedAnswer = connect(mapStateToProps)(Qa);
export default ConnectedAnswer;
