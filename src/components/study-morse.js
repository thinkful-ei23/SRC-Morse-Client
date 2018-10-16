import React from 'react';
import Morse from '../images/morse.png';

export default function StudyGuide() {
	return (
		<div className="study-guide">
			<img
				src={Morse}
				alt="all the dots and dashes associated with each letter of the alphabet"
			/>
		</div>
	);
}
