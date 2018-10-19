import { CORRECT_ANSWER, INCORRECT_ANSWER } from '../actions/answers-feedback';

const initialState = {
	list: ''
};

export default function ansReducer(state = initialState, action) {
	if (action.type === CORRECT_ANSWER) {
		console.log('reducer log:', action.list);
		// console.log(':', action.list.head.value.memoryStrength);
		let M = action.list.head.value.memoryStrength;
		let currNode = action.list.head;
		let nextNode = action.list.head.next;
		let thirdNode = nextNode.next;
		M = M * 2;
		console.log(action.list.head.value);
		// return Object.assign({}, state, {
		// 	answer: action.answer
		// });
	}
	if (action.type === INCORRECT_ANSWER) {
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
