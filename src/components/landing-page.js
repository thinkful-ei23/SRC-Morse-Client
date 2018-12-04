import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import './css/landing-page.css';

export function LandingPage(props) {
	// If we are logged in redirect straight to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="home">
			<div className="login-form login-form-bg">
				<h2>Welcome to Morse Learner</h2>
				<LoginForm />
			</div>
			<div className="intro">
				<h3>Learn Morse code with your friends!</h3>
				<p>
					Here's the thing. Spies ALL know morse code. <br />
					What's morse code? It's a secret.
					<br />
					You'll have to <Link to="/register">Register </Link> to find out.
					<br />
					To try out your spy-ness, try the demo account
					<br />
					<b>Username:</b> useruseruser
					<br />
					<b>Password:</b> password123
					<br />
					Shhhhh! Don't tell anyone, ok?
				</p>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
