export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer = state => ({
	type: CORRECT_ANSWER,
	state
});

export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const incorrectAnswer = state => ({
	type: INCORRECT_ANSWER,
	state
});
