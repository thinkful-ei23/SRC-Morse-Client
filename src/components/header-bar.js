import React from 'react';
import { connect } from 'react-redux';

import './css/header-bar.css';

export class HeaderBar extends React.Component {
	render() {
		return (
			<div className="header-bar">
				<h1>Morse Learner</h1>
				<div className="navbar">
					<ul>
						<li>
							<button>My Progress</button>
						</li>
						<li>
							<button>FAQ</button>
						</li>
						<li>
							<button>Log Out</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	success: state.save.success
});

export default connect(mapStateToProps)(HeaderBar);
