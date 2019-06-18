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
	};

	return (
		<form>
			<InputPresentation
				type="text"
				value={form.description}
				name="description"
				error={form.errors.description}
				inputChange={inputChange}
			/>

			<ButtonPresentation type="button" labelText="Add" onClick={handleSubmit} />
		</form>
	);
};

export default connect(null, { addNewTodo })(Form);
