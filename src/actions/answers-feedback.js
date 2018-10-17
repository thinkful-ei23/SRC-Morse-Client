export const GET_ANSWER = 'GET_ANSWER';
export const getAnswer = answer => ({
	type: GET_ANSWER,
	answer
});

export const COMPARE_Q_A = 'COMPARE_Q_A';
export const compareAnswer = (q, a) => ({
	type: COMPARE_Q_A,
	q,
	a
});
