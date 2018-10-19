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
	const authToken = getState().auth.authToken;
	const userId = getState().auth.currentUser.id;
	const head = getState().auth.currentUser.head;
	const questions = getState().auth.currentUser.questions;
	const points = getState().auth.currentUser.points;
	let newQ = questions.map(obj => JSON.stringify(obj));
	const currentUser = { questions: newQ, points: points, head: head };

	console.log('currentuser', head, newQ, points);
	return fetch(`${API_BASE_URL}/users/${userId}`, {
		method: 'PUT',
		body: JSON.stringify(currentUser),
		header: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => {
			console.log(res);
			res.send('saved').done();
		})
		.then(() => dispatch(saveSuccess()))
		.catch(err => {
			dispatch(saveError(err));
		});
};
