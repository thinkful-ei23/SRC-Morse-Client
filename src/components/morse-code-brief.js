import React from 'react';
import StudyGuide from './study-morse';

export default class FAQ extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			study: false
		};
	}

	studyClick(e) {
		this.setState({ study: true });
	}

	onClick(e) {
		this.setState({ study: false });
	}

	render() {
		if (this.state.study == true) {
			return <StudyGuide onClick={e => this.onClick(e)} />;
		}
		return (
			<div className="FAQ">
				<h2>What is Morse Code?</h2>
				<p>
					Morse Code is "an alphabet or code in which letters are represented by
					combinations of long and short light or sound signals."
				</p>
				<p>
					<b>Feel like learning some morse code?</b>
				</p>
				<button onClick={e => this.studyClick(e)}>
					Yes! I want to be a spy!
				</button>
				<button onClick={e => this.props.closeClick(e)}>Close</button>
			</div>
		);
	}
}
