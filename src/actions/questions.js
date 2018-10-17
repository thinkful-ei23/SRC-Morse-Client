'use strict';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from "./utils";

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({ type: FETCH_QUESTIONS_REQUEST })

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = (question) => ({ type: FETCH_QUESTIONS_SUCCESS, question })

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = (error) => ({ type: FETCH_QUESTIONS_ERROR }, error)

export const fetchQuestions = () => (dispatch, getState) => {
  dispatch(fetchQuestionsRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(question => dispatch(fetchQuestionsSuccess(question)))
  .catch(err => dispatch(fetchQuestionsError(err)));
}

// will have a post sync and async