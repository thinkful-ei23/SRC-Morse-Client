import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import qa from './qa-form';
import history from './history';
import './dashboard.css';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
	        <qa />
		<history />
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
};

export default connect(mapStateToProps)(Dashboard);
