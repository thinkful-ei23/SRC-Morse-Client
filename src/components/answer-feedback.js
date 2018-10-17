import React from 'react';

export default class Answers extends React.Component {
	// componentDidMount() {
	// this.props.dispatch(getAnswer(this.props.value));
	// }

	render() {
		//if answer matches question key-value pair, answer is correct
		//else, answer is incorrect
		//currently hardcoded, needs to be fixed after 'mapStateToProps' working
		return <div className="answer-feedback">Your answer is:</div>;
	}
}

// Answers = connect()(Answers);

// function mapStateToProps(state) {
// 	console.log('mapstatetoprops');
// 	console.log(state.answers);
// 	return {
// 		answers: state.answers
// 	};
// }
