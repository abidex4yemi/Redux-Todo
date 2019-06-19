import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../../../state/actions/dispatchers';
import { InputPresentation } from './InputPresentation';
import { ButtonPresentation } from './ButtonPresentation';

const Form = props => {
	const { addNewTodo } = props;

	const [form, setValues] = useState({
		description: '',
		errors: {}
	});

	const inputChange = (field, value) => {
		setValues({
			...form,
			[field]: value
		});
	};

	const handleSubmit = () => {
		addNewTodo(form.description);
		setValues({
			description: '',
			errors: {}
		});
	};

	return (
		<form
			onSubmit={evt => {
				evt.preventDefault();
				handleSubmit();
			}}
		>
			<InputPresentation
				type="text"
				value={form.description}
				name="description"
				error={form.errors.description}
				inputChange={inputChange}
				placeholder="Enter Description..."
			/>

			<ButtonPresentation type="button" labelText="Add" onClick={handleSubmit} />
		</form>
	);
};

export default connect(null, { addNewTodo })(Form);
