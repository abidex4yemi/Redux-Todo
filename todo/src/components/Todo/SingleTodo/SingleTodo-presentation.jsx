import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPresentation } from '../Form/ButtonPresentation';

export const SingleTodoPresentation = props => {
	const { description, completed, id, toggleTodoCompleted, deleteTodo } = props;
	const addNewClass = completed ? 'strike-through' : '';

	const handleDelete = () => {
		deleteTodo(id);
	};

	const handleTodoToggle = () => {
		toggleTodoCompleted(id);
	};

	return (
		<div className={`list-item ${addNewClass}`} onClick={handleTodoToggle}>
			<div>{description}</div>
			<div>
				<ButtonPresentation labelText="Delete" type="button" onClick={handleDelete} />
			</div>
		</div>
	);
};

SingleTodoPresentation.propTypes = {
	description: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
};
