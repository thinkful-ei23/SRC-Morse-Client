import React from 'react';
import StudyGuide from './study-morse';
import { Link } from 'react-router-dom';

export default class FAQ extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			study: false
		};
		this.onClose = this.onClose.bind(this);
	}

	studyClick(e) {
		this.setState({ study: true });
	}

	onClick(e) {
		this.setState({ study: false });
	}

	onClose(e) {
		this.props.history.push('/');
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
				<button onClick={e => this.onClose(e)}>Close</button>
			</div>
		);
	}
}
