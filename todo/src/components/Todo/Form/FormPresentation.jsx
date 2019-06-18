import React, { useState } from 'react';
import { InputPresentation } from './InputPresentation';
import { ButtonPresentation } from './ButtonPresentation';

export const Form = props => {
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

	return (
		<form>
			<InputPresentation
				type="text"
				value={form.description}
				name="description"
				error={form.errors.description}
				inputChange={inputChange}
			/>

			<ButtonPresentation type="button" labelText="Add" onClick={inputChange} />
		</form>
	);
};
