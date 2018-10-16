import React from 'react';
import { getAnswer } from '../actions/answers-feedback';
import { connect } from 'react-redux';

export class Answers extends React.Component {
	componentDidMount() {
		console.log('component did mount', this.value);
		// this.props.dispatch(getAnswer(this.value));
	}

	render() {
		//if answer matches question key-value pair, answer is correct
		//else, answer is incorrect
		//currently hardcoded, needs to be fixed after 'mapStateToProps' working
		return <div className="answer-feedback">Your answer is:</div>;
	}
}

Answers = connect()(Answers);

function mapStateToProps(state) {
	console.log('mapstatetoprops');
	// console.log(this.props.state);
	return {
		answers: state.answers
	};
}
const ConnectedAnswer = connect(mapStateToProps)(Answers);
export default ConnectedAnswer;
