import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import questionReducer from './reducers/questions';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import ansReducer from './reducers/answers-feedback';
import logoutReducer from './reducers/logout';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		question: questionReducer,
		protectedData: protectedDataReducer,
		answer: ansReducer,
		save: logoutReducer
	}),
	composeEnhancers(applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;
