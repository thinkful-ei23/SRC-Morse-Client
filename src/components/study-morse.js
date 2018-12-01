import React from 'react';
import Morse from '../images/morse.png';
import HeaderBar from './css/header-bar.css';

export default function StudyGuide(props) {
	return (
		<div className="study-guide">
			<HeaderBar />

			<button onClick={e => props.onClick(e)}>Close</button>
			<img
				src={Morse}
				alt="all the dots and dashes associated with each letter of the alphabet"
			/>
		</div>
	);
}
