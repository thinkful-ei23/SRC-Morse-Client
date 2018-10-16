import { COMPARE_ANSWER } from '../actions/answers-feedback';

const initialState = {
	question: { '...': 's' }
};

export default function ansReducer(state = initialState, action) {
	console.log(action.answer);
	if (action.type === COMPARE_ANSWER) {
		if (action.answer === state.question) {
			return 'Correct!';
		}
	}
	return state;
}
