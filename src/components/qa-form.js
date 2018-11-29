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
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Redirect } from 'react-router-dom';

export class Qa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// answer: ''
			feedback: '',
			correctCount: 0,
			showProg: false,
			correctAnswer: false,
			faq: false
		};
	}
	componentDidMount() {
		// console.log('componentdidMount');
		this.props.dispatch(fetchQuestions());
		this.setState({
			faq: false
		});
	}

	progButton(e) {
		this.setState({ showProg: true });
	}
	onClick(e) {
		console.log('faq clicked');
		this.setState({
			faq: true
		});
	}

	logOut() {
		alert('You have successfully logged out.');
		this.props.dispatch(clearAuth());
		clearAuthToken();
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
		if (
			values.answer.toLowerCase() ===
			this.props.questions[0].answer.toLowerCase()
		) {
			console.log('correct');
			this.setState({
				feedback:
					"Yay! Keep at it! You'll be a spy in no time! ",
				correctCount: this.state.correctCount + 1
			});
			this.props.dispatch(correctAnswer(this.props.questions));
			// console.log(this.props.questions)
		} else {
			console.log('incorrect');
			this.setState({
				feedback:
					'You might want to think about never going near cryptography...',
				correctAnswer: this.props.questions[0].answer,
				correctCount: this.state.correctCount - 1
			});
			setTimeout(() => {
				this.props.dispatch(incorrectAnswer(this.props.questions));
			}, 3000);
			setTimeout(() => {
				this.setState({
					correctAnswer: false
				});
			}, 3000);
		}
	}

	render() {
		// **THIS is the RESPONSE from call to mLab**
		if (this.state.faq) {
			return <Redirect to="/faq" />;
		}
		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = <button className="log-button" onClick={() => this.logOut()}>Log out</button>;
		}
		let display = '';
		let correction = '';
		const questions = this.props.questions;
		if (questions) {
			// console.log('question', questions);
			display = questions[0].question;
		}
		if (!questions) {
			return <div>loading...</div>;
		}
		if (this.state.correctAnswer) {
			correction = `The correct answer is: ${this.state.correctAnswer}`;
		}

		if (this.state.showProg === true) {
			return (
				<div className="row">
					<div className="add-margin">
						<span className="your-name">Hello {this.props.name}</span>
						<div className="header-panel">
							{logOutButton}
							<button className="button-look button-margin" onClick={e => this.onClick(e)}>FAQ</button>
						</div>
					</div>
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
					<Next className="inline-block" onClick={e => this.handleNext(e)} />

					<div className="answer-feedback inline-block">
						{this.state.feedback}
					</div>
					<div className="correctAnswer">{correction}</div>

					<div className="answer-feedback">
						Correct Answers: {this.state.correctCount}
					</div>
				</div>
				</div>
			);
		}

		return (
			<div className="row" >
				<div className="add-margin">
					<span className="your-name">Hello {this.props.name}</span>
					<div className="header-panel">
						{logOutButton}
						<button className="button-margin" onClick={e => this.onClick(e)}>FAQ</button>
					</div>
				</div>
			<div className="qa-form">
				<label className="big-bitch-text">
					What is the word for {display}?
				</label>

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
								className="input-qa"
								type="answer"
								name="answer"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.answer || ''}
							/>
							{errors.answer && touched.answer && errors.answer}
							<button className="submit-input" type="submit" disabled={isSubmitting}>
								Submit Answer
							</button>
						</form>
					)}
				</Formik>
				{/* <Answers answer={this.state.answer} />  --This was a try at refactoring out the Answer Feedback but I couldn't get it to recognize certain props from here.*/}
				<Next className="inline-block" onClick={e => this.handleNext(e)} />
				<div className="answer-feedback inline-block">
					{this.state.feedback}
				</div>
				<div className="correctAnswer">{correction}</div>
				<button className="inline-block" onClick={e => this.progButton(e)}>
					Show Progress
				</button>
			</div>
			</div>
		);
	}
}

Qa = connect()(Qa);

function mapStateToProps(state) {
	// console.log('in mapstatetoprops', state);
	return {
		questions: state.question.question,
		list: state.answer.list,
		name: `${state.auth.currentUser.name}`,
		loggedIn: state.auth.currentUser !== null
	};
}

const ConnectedAnswer = connect(mapStateToProps)(Qa);
export default ConnectedAnswer;
