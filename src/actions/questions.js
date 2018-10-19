'use strict';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { QLL } from './make-LL';

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({ type: FETCH_QUESTIONS_REQUEST });

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = (list, question) => ({
	type: FETCH_QUESTIONS_SUCCESS,
	list,
	question
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => (
	{ type: FETCH_QUESTIONS_ERROR }, error
);

export const fetchQuestions = () => (dispatch, getState) => {
	dispatch(fetchQuestionsRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/questions`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
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
		.then(question => dispatch(fetchQuestionsSuccess(QLL, question)))
		.catch(err => {
			// console.log(err);
			dispatch(fetchQuestionsError(err));
		});
};

export const MAKE_LIST = 'MAKE_LIST';
export const makeList = list => ({
	type: MAKE_LIST,
	list
});

// will have a post sync and async

// export const USER_INPUT_SUCCESS = 'USER_INPUT_SUCCESS';
// export const userInputSuccess= userInput => ({

// })
