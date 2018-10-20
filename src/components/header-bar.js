import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { save } from '../actions/logout';
import { clearAuthToken } from '../local-storage';
import { Redirect } from 'react-router-dom';
import FAQ from './morse-code-brief';

import './header-bar.css';

export class HeaderBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faq: false
		};
	}
	componentDidMount() {
		this.setState({
			faq: false
		});
	}

	onClick(e) {
		console.log('faq clicked');
		this.setState({
			faq: true
		});
	}

	logOut() {
		this.props.dispatch(save()).then(() => {
			if (this.props.success) {
				console.log('success!');
				// alert('You have successfully logged out.');
				this.props.dispatch(clearAuth());
				clearAuthToken();
			}
		});
	}

	render() {
		if (this.state.faq) {
			return <Redirect to="/faq" />;
		}
		// Only render the log out button if we are logged in
		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
		}
		return (
			<div className="header-bar">
				<h1>Morse App</h1>
				<div className = "header-panel">
						<div className="dashboard-name">Hello {this.props.name}</div>
				{logOutButton}
				<button onClick={e => this.onClick(e)}>FAQ</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  name: `${state.auth.currentUser.name}`,
	loggedIn: state.auth.currentUser !== null,
	success: state.save.success
});

export default connect(mapStateToProps)(HeaderBar);
