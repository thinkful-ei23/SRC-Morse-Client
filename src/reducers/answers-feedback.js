import { CORRECT_ANSWER, INCORRECT_ANSWER } from '../actions/answers-feedback';

const initialState = {
	list: ''
};

export default function ansReducer(state = initialState, action) {
	if (action.type === CORRECT_ANSWER) {
		console.log('reducer log:', action.state.length);
		let M = action.state[0].memoryStrength * 2;
		if (M > action.state.length) {
			M = action.state.length - 1;
		}
		let newState = Object.assign({}, action.state[0], {
			memoryStrength: M,
			points: action.state[0].points + 1,
			next: action.state[0].next + M
		});
		// console.log(newState);
		action.state.splice(0, 1);
		// console.log('take away ansswered q:', action.state);
		action.state.splice(M, 0, newState);
		// console.log('add to M-th place', action.state);
		return Object.assign({}, state, {
			list: newState
		});
	}
	if (action.type === INCORRECT_ANSWER) {
		let M = 1;
		let newState = Object.assign({}, action.state[0], {
			memoryStrength: M,
			points: action.state[0].points - 1,
			next: action.state[0].next + M
		});
		action.state.splice(0, 1);
		action.state.splice(2, 0, newState);
		return Object.assign({}, state, {
			list: newState
		});
	}
	return state;
}
