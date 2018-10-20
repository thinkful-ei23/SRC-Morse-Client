import { CORRECT_ANSWER, INCORRECT_ANSWER } from '../actions/answers-feedback';

const initialState = {
	list: ''
};

export default function ansReducer(state = initialState, action) {
	if (action.type === CORRECT_ANSWER) {
		// console.log('reducer log:', action.state);
		// console.log(state.list);
		let M = action.state[0].memoryStrength * 2;
		if (M > action.state.length) {
			M = action.state.length - 1;
		}
		let newState = Object.assign({}, action.state[0], {
			memoryStrength: M,
			points: action.state[0].points + 1,
			next: 1 + M
		});
		// console.log(newState);
		action.state.splice(0, 1);
		// console.log('take away ansswered q:', action.state);
		action.state.splice(M, 0, newState);
		// console.log('add to M-th place', action.state);

		action.state.map(obj => (obj.next = action.state.indexOf(obj) + 1));
		// console.log(action.state);
		let newStart = Object.assign({}, action.state[0], {
			next: 1
		});
		let finalState = Object.assign({}, action.state[action.state.length - 1], {
			next: null
		});
		action.state.splice(-1, 1, finalState);
		// console.log('finalState:', action.state);
		action.state.splice(0, 1, newStart);
		// console.log(action.state);
		return Object.assign({}, state, {
			list: action.state
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
		// console.log(action.state);
		action.state.map(obj => (obj.next = action.state.indexOf(obj) + 1));
		let newStart = Object.assign({}, action.state[0], {
			next: 1
		});
		let finalState = Object.assign({}, action.state[action.state.length - 1], {
			next: null
		});
		action.state.splice(-1, 1, finalState);
		// console.log(action.state);
		return Object.assign({}, state, {
			list: action.state
		});
	}
	return state;
}
