import React from 'react';
import { Formik } from 'formik';

export default function AnswerInput(props) {
	return (
		<Formik
			initialValues={{ answer: '' }}
			validate={values => {
				let errors = {};
				if (!values.answer) {
					errors.answer = 'Required';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setTimeout(() => {
					props.handleSubmit(values);
					setSubmitting(false);
					resetForm();
				}, 10);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit}>
					<input
						className="answer-input"
						type="answer"
						name="answer"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.answer || ''}
					/>
					{errors.answer && touched.answer && errors.answer}
					<button
						className="submit-input"
						type="submit"
						disabled={isSubmitting}
					>
						Submit Answer
					</button>
				</form>
			)}
		</Formik>
	);
}
