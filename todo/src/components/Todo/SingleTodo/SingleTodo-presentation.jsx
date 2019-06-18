import React from 'react';
import PropTypes from 'prop-types';

export const SingleTodoPresentation = props => {
	const { description, completed, id, toggleTodoCompleted } = props;
	const addNewClass = completed ? 'strike-through' : '';

	return (
		<li className={`list-item ${addNewClass}`} onClick={() => toggleTodoCompleted(id)}>
			{description}
		</li>
	);
};

SingleTodoPresentation.propTypes = {
	description: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	toggleTodoCompleted: PropTypes.func.isRequired
};
