'use strict';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from "./utils";

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({ type: FETCH_QUESTIONS_REQUEST })

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
fetchQuestionsSuccess = (question) => ({ type: FETCH_QUESTIONS_SUCCESS, question })

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = (error) => ({ type: FETCH_QUESTIONS_ERROR }, error)

export fetchQuestions = () => (dispatch) => {
  dispatch(fetchQuestionsRequest());
}

// will have a post sync and async