import { SAVE_REQUEST, SAVE_ERROR, SAVE_SUCCESS } from '../actions/logout';

const initialState = {
	saving: false,
	error: null
};

export default function logoutReducer(state = initialState, action) {
	if (action.type === SAVE_REQUEST) {
		return Object.assign({}, state, {
			saving: true
		});
	}
	if (action.type === SAVE_ERROR) {
		return Object.assign({}, state, {
			saving: false,
			error: action.err
		});
	}
	if (action.type === SAVE_SUCCESS) {
		return Object.assign({}, state, {
			saving: false,
			error: null
		});
	}
	return state;
}
