import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import './css/qa-form.css';
import Next from './next-button';
import { correctAnswer, incorrectAnswer } from '../actions/answers-feedback';
import { fetchQuestions } from '../actions/questions';
import { Redirect } from 'react-router-dom';
import AnswerInput from './answer-input';

export class Qa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: '',
			correctCount: 0,
			showProg: false,
			correctAnswer: false
		};
	}
	componentDidMount() {
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
		if (
			values.answer.toLowerCase() ===
			this.props.questions[0].answer.toLowerCase()
		) {
			console.log('correct');
			this.setState({
				feedback: "Yay! Keep at it! You'll be a spy in no time! ",
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
		let display = '';
		let correction = '';
		let progress = (
			<button className="inline-block" onClick={e => this.progButton(e)}>
				Show Progress
			</button>
		);
		const questions = this.props.questions;
		if (questions) {
			// console.log('question', questions);
			display = questions[0].question;
		}
		if (!questions) {
			display = <div className="loading">loading...</div>;
		}
		if (this.state.correctAnswer) {
			correction = `The correct answer is: ${this.state.correctAnswer}`;
		}
		if (this.state.showProg === true) {
			progress = (
				<div className="answer-feedback">
					Correct Answers: {this.state.correctCount}
				</div>
			);
		}

		return (
			<div className="row">
				<div className="add-margin">
					<span className="your-name">Hello {this.props.name}</span>
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
								<button
									className="submit-input"
									type="submit"
									disabled={isSubmitting}
								>
									Submit Answer
								</button>
							</form>
						)}
					</Formik>
					{/* <AnswerInput /> */}
					<Next className="inline-block" onClick={e => this.handleNext(e)} />
					<div className="answer-feedback inline-block">
						{this.state.feedback}
					</div>
					<div className="correctAnswer">{correction}</div>
					{progress}
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
