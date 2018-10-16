import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

import './landing-page.css';

export function LandingPage(props) {
	// If we are logged in redirect straight to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="home">
			<div className="login-form">
				<h2>Welcome to Foo App</h2>
				<LoginForm />
				{/* <Link to="/register">Register</Link> */}
			</div>
			<div className="intro">
				<h3>Do you wanna be a spy? Well, do ya, PUNK?</h3>
				<p>
					Here's the thing. Spies ALL know morse code. <br />
					What's morse code? It's a secret.
					<br />
					You'll have to <Link to="/register">Register </Link> to find out.
				</p>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
