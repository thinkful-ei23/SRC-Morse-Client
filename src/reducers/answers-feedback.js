import { GET_ANSWER } from '../actions/answers-feedback';

const initialState = {
	answer: ''
};

export default function ansReducer(state = initialState, action) {
	console.log(action.answer);
	if (action.type === GET_ANSWER) {
		return Object.assign({}, state, {
			answer: action.answer
		});
	} else {
		return state;
	}
}
