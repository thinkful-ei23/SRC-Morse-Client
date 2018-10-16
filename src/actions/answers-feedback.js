export const COMPARE_ANSWER = 'COMPARE_ANSWER';
export const getAnswer = (question = this.state.question, answer) => ({
	type: COMPARE_ANSWER,
	question,
	answer
});
