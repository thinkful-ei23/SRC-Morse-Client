import React from 'react';
import { getAnswer } from '../actions/answers-feedback';

export default class Answers extends React.Component {
	// componentDidMount() {
	// 	this.props.dispatch(getAnswer(answer));
	// }

	render() {
		//if answer matches question key-value pair, answer is correct
		//else, answer is incorrect
		return <div className="answer-feedback">Your answer is:</div>;
	}
}

// Answers = connect()(Answer);

// function mapStateToProps(state) {
// 	console.log('mapstatetoprops');
// 	return {
// 		answers: state.answers.answers
// 	};
// }
// export const ConnectedAnswer = connect(mapStateToProps)(Answers);
// export default ConnectedAnswer;
