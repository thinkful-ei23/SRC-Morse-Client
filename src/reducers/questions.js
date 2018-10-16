import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_ERROR } from "../actions/questions";

const initialState = {
  question: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
}
  else if(action.type === FETCH_QUESTIONS_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null
    })
  }
  else if(action.type === FETCH_QUESTIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }
}

