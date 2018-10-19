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
import { correctAnswer, incorrectAnswer } from '../actions/answers-feedback';
// import DisplayQuestions from './display-question'; // tried to put question in its own component
import { fetchQuestions } from '../actions/questions';

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
		this.props.dispatch(incorrectAnswer(this.props.questions));
	}

	handleSubmit(values) {
		/* --this would put the input into the State to be passed to child component: Answer Feedback
			-- This does not work yet, try again later
		this.setState({
		 	answer: values.answer
		 });
			*/
		// console.log(values.answer);
		// console.log( answer.head.value.answer);
		if (values.answer.toLowerCase() === this.props.questions[0].answer.toLowerCase()) {
			console.log('correct');
			this.setState(
				{
					feedback:
						"Yay! Keep at it! You'll be a spy in no time! Total Progress: ",
					correctCount: this.state.correctCount + 1
				},
				() => this.props.dispatch(correctAnswer(this.props.questions))
			);
			// console.log(this.props.questions)
		} else {
			console.log('incorrect');
			this.setState(
				{
					feedback:
						'You might want to think about never going near cryptography...',
					correctCount: this.state.correctCount - 1
				},
				() => this.props.dispatch(incorrectAnswer(this.props.questions))
			);
		}
	}

	render() {
		// **THIS is the RESPONSE from call to mLab**
		let display = '';
		const questions = this.props.questions;
		if (questions) {
			console.log('question', questions);
			display = questions[0].question;
		}
		if (!questions) {
			return <div>loading...</div>;
		}

		if (this.state.showProg === true) {
			return (
				<div className="qa-form">
					<label>What is the word for {display}?</label>
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

					<div className="answer-feedback">
						Correct Answers: {this.state.correctCount}
					</div>
				</div>
			);
		}

		return (
			<div className="qa-form">
				<label>What is the word for {display}?</label>

				{/* **THIS is where the INPUT for the answer starts** */}

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
				<button onClick={e => this.progButton(e)}>Show Progress</button>
			</div>
		);
	}
}

Qa = connect()(Qa);

function mapStateToProps(state) {
	// console.log('in mapstatetoprops', state);
	return {
		questions: state.question.question,
		list: state.answer.list
	};
}

const ConnectedAnswer = connect(mapStateToProps)(Qa);
export default ConnectedAnswer;
