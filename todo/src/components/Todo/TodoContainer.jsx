import React from 'react';
import PropTypes from 'prop-types';
import { SingleTodoPresentation } from './SingleTodo/SingleTodo-presentation';

export const TodoContainer = props => {
	const { todos, toggleTodoCompleted } = props;

	return (
		<ul>
			{todos.map(todo => <SingleTodoPresentation key={todo.id} toggleTodoCompleted={toggleTodoCompleted} {...todo} />)}
		</ul>
	);
};

TodoContainer.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		})
	)
};
