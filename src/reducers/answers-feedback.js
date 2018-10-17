import { GET_ANSWER, COMPARE_Q_A } from '../actions/answers-feedback';

const initialState = {
	answer: '',
	correct: false,
	incorrect: false
};

export default function ansReducer(state = initialState, action) {
	// console.log('reducer log:', action);
	if (action.type === GET_ANSWER) {
		return Object.assign({}, state, {
			answer: action.answer
		});
	}
	if (action.type === COMPARE_Q_A) {
		if (action.q === action.a) {
			return Object.assign({}, state, {
				correct: true
			});
		} else {
			return Object.assign({}, state, {
				incorrect: true
			});
		}
	}
	return state;
}
