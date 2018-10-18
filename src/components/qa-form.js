/*TO-DO:
	CHECK IMPORTS
	ACTIONS
	SET UP ELEMENTS (TEMPLATE)
	-CSS formatting	
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
//import { addRack } from '../actions/protected-data';
import './qa-form.css';
import Next from './next-button';
import { getAnswer, compareAnswer } from '../actions/answers-feedback';
import DisplayQuestions from './display-question'; // tried to put question in its own component
import { fetchQuestions } from "../actions/questions";

export class Qa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// answer: ''
			feedback: '',
			correctCount: 0,
			showProg: false
		};
	}
	componentDidMount() {
		// console.log('componentdidMount');
		this.props.dispatch(fetchQuestions());
	}


	progButton(e) {
		this.setState({ showProg: true });
	}
   

	handleNext(e) {
		console.log('Next');
	}

	handleSubmit(values) {
		/* --this would put the input into the State to be passed to child component: Answer Feedback
			-- This does not work yet, try again later
		this.setState({
		 	answer: values.answer
		 });
			*/
		// console.log(values.answer);
		if (values.answer.toLowerCase() === this.props.questions[0].answer.toLowerCase()) {
			console.log('correct');
			this.setState({
				feedback: 'Yay! Keep at it! You\'ll be a spy in no time! ',
				correctCount: this.state.correctCount +1
			});
		} else {
			console.log('incorrect');
			this.setState({
				feedback: 'You might want to think about never going near cryptography...',
				correctCount: this.state.correctCount - 1
			});
		}
	}

	render() {
		const questions = this.props.questions;
		if (!questions) {
			return <div>loading...</div>
		}
		// console.log('question', questions[0].question);
		const question = questions[0].question;


		if (this.state.showProg === true) {
			return (
				<div className="qa-form">
					<label>What is the word for {question}?</label>
					<Formik
						initialValues={{ answer: '' }}
						validate={values => {
							let errors = {};
							if (!values.answer) {
								errors.answer = 'Required';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							setTimeout(() => {
								this.handleSubmit(values);
								setSubmitting(false);
								resetForm();
							}, 10);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
							resetForm
							/* and other goodies */
						}) => (
							<form onSubmit={handleSubmit}>
								<input
									type="answer"
									name="answer"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.answer || ''}
								/>
								{errors.answer && touched.answer && errors.answer}
								<button type="submit" disabled={isSubmitting}>
									Submit Answer
								</button>
							</form>
						)}
					</Formik>
					{/* <Answers answer={this.state.answer} />  --This was a try at refactoring out the Answer Feedback but I couldn't get it to recognize certain props from here.*/}
					<Next onClick={e => this.handleNext(e)} />


					<div className="answer-feedback">{this.state.feedback}</div>


					<div className="answer-feedback">Correct Answers: {this.state.correctCount}</div>

				</div>
			);
		}

		return (
			<div className="qa-form">
				<label>What is the word for {question}?</label>
				<Formik
					initialValues={{ answer: '' }}
					validate={values => {
						let errors = {};
						if (!values.answer) {
							errors.answer = 'Required';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setTimeout(() => {
							this.handleSubmit(values);
							setSubmitting(false);
							resetForm();
						}, 10);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						resetForm
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<input
								type="answer"
								name="answer"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.answer || ''}
							/>
							{errors.answer && touched.answer && errors.answer}
							<button type="submit" disabled={isSubmitting}>
								Submit Answer
							</button>
						</form>
					)}
				</Formik>
				{/* <Answers answer={this.state.answer} />  --This was a try at refactoring out the Answer Feedback but I couldn't get it to recognize certain props from here.*/}
				<Next onClick={e => this.handleNext(e)} />
				<button onClick={e => this.progButton(e)}>Show Progress</button>

			</div>
		);
	}
}

Qa = connect()(Qa);

function mapStateToProps(state) {
	// console.log('in mapstatetoprops', state);
	return {
		// answer: state.answer.answer,
		// correct: state.answer.correct,
		// incorrect: state.answer.incorrect
		questions: state.question.question
	};
}

const ConnectedAnswer = connect(mapStateToProps)(Qa);
export default ConnectedAnswer;
