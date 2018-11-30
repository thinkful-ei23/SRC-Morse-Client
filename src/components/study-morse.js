import React from 'react';
import Morse from '../images/morse.png';
import HeaderBar from './header-bar';


export default function StudyGuide(props) {
	return (
	<HeaderBar />
<div className="study-guide">
			<button onClick={e => props.onClick(e)}>Close</button>
			<img
				src={Morse}
				alt="all the dots and dashes associated with each letter of the alphabet"
			/>
		</div>
	);
}
