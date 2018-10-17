import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import Qa from './qa-form';
import History from './history';
import './dashboard.css';
import { fetchQuestions } from '../actions/questions';

export class Dashboard extends React.Component {
	componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchQuestions());
	}

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-name">Hello {this.props.name}</div>
	            <Qa />
                <History />
            </div>
        );
    }
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.name}`,
        protectedData: state.protectedData.data,
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
