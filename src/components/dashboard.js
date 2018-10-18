import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import Qa from './qa-form';
import FAQ from './morse-code-brief';
import History from './history';
import './dashboard.css';

// import { fetchQuestions } from '../actions/questions';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faq: false
		};
	}

	onClick(e) {
		console.log('faq clicked');
		this.setState({
			faq: true
		});
	}

	closeClick(e) {
		this.setState({
			faq: false
		});
	}

	render() {
		if (this.state.faq) {
			return <FAQ closeClick={e => this.closeClick(e)} />;
		}
		return (
			<div className="dashboard">
				<div className="dashboard-name">Hello {this.props.name}</div>
				<button onClick={e => this.onClick(e)}>FAQ</button>
				<Qa />
				<History />
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
