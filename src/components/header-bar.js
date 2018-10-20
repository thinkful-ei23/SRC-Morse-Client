import React from 'react';
import { connect } from 'react-redux';

import './header-bar.css';

export class HeaderBar extends React.Component {
	render() {
		return (
			<div className="header-bar">
				<h1>Morse App</h1>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	success: state.save.success
});

export default connect(mapStateToProps)(HeaderBar);
