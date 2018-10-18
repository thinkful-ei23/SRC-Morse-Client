'use strict';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({ type: FETCH_QUESTIONS_REQUEST });

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = question => ({
	type: FETCH_QUESTIONS_SUCCESS,
	question
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => (
	{ type: FETCH_QUESTIONS_ERROR }, error
);

export const fetchQuestions = () => (dispatch, getState) => {
	dispatch(fetchQuestionsRequest());
	// console.log('In fetch action');
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/questions`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => {
			// console.log(res);
			return normalizeResponseErrors(res);
		})
		.then(res => {
			// console.log(res);
			return res.json();
		})
		.then(question => dispatch(fetchQuestionsSuccess(question)))
		.catch(err => {
			// console.log(err);
			dispatch(fetchQuestionsError(err));
		});
};

// will have a post sync and async

// export const USER_INPUT_SUCCESS = 'USER_INPUT_SUCCESS';
// export const userInputSuccess= userInput => ({

// })
