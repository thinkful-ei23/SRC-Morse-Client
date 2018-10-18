import React from 'react';

export default function Next(props) {
	let questions = [q1, q2, q3];
	return (
		<button onClick={e => props.onClick(e)}>Can I try another code?</button>
	);
}
