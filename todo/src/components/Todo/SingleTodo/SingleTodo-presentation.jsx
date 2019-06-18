import React from 'react';
import PropTypes from 'prop-types';

export const SingleTodoPresentation = props => {
	const { task, completed, id, toggleTodoCompleted } = props;
	const addNewClass = completed ? 'strike-through' : '';

	return (
		<li className={`list-item ${addNewClass}`} onClick={() => toggleTodoCompleted(id)}>
			{task}
		</li>
	);
};

SingleTodoPresentation.propTypes = {
	task: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	toggleTodoCompleted: PropTypes.func.isRequired
};
