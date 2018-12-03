import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import './css/header-bar.css';

export class HeaderBar extends React.Component {
	logOut() {
		alert('You have successfully logged out.');
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

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
							<Link to="/faq">
								<button>FAQ</button>
							</Link>
						</li>
						<li>
							<button onClick={e => this.logOut(e)}>Log Out</button>
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
