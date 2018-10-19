export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer = list => ({
	type: CORRECT_ANSWER,
	list
});

export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const incorrectAnswer = list => ({
	type: INCORRECT_ANSWER,
	list
});
