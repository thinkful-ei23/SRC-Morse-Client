import React from 'react';

export default function Next(props) {
	return (
		<button onClick={e => props.onClick(e)}>Can I try another code?</button>
	);
}
