import { API_BASE_URL } from '../config';

export const SAVE_REQUEST = 'SAVE_REQUEST';
export const saveRequest = () => ({
	type: SAVE_REQUEST
});

export const SAVE_ERROR = 'SAVE_ERROR';
export const saveError = err => ({
	type: SAVE_ERROR,
	err
});

export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const saveSuccess = () => ({
	type: SAVE_SUCCESS
});

export const SAVE = 'SAVE';
export const save = () => (dispatch, getState) => {
	dispatch(saveRequest());
	// let state = getState();
	// console.log('stuff', state);
	const authToken = getState().auth.authToken;
	const userId = getState().auth.currentUser.id;
	const head = getState().auth.currentUser.head;
	const questions = getState().question.question;
	// console.log(questions);
	const points = getState().auth.currentUser.points;
	// let newQ = questions.map(obj => JSON.stringify(obj));
	const currentUser = { questions: questions, points: points, head: head };

	// console.log('currentuser', head, questions, points);
	return fetch(`${API_BASE_URL}/users/${userId}`, {
		method: 'PUT',
		body: JSON.stringify(currentUser),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => {
			dispatch(saveSuccess());
			// console.log('res', res);
			res.json();
		})
		.catch(err => {
			dispatch(saveError(err));
		});
};
