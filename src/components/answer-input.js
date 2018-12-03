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
				isSubmitting,
				resetForm
				/* and other goodies */
			}) => (
				<form onSubmit={values => props.handleSubmit(values)}>
					<input
						type="answer"
						name="answer"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.answer || ''}
					/>
					{errors.answer && touched.answer && errors.answer}
					<button type="submit" disabled={isSubmitting}>
						Submit Answer
					</button>
				</form>
			)}
		</Formik>
	);
}
