import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Qa from './qa-form';
// import History from './history';
import HeaderBar from './header-bar';

import './css/dashboard.css';

export class Dashboard extends React.Component {
	render() {
		return (
			<div className="dashboard">
				<HeaderBar />
				<Qa />
				{/* <History /> future feature */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log('dashboard', state);
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.name}`,
		protectedData: state.protectedData.data
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
