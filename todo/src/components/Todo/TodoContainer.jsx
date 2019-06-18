import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodoCompleted, deleteTodo } from '../../state/actions/dispatchers';
import { SingleTodoPresentation } from './SingleTodo/SingleTodo-presentation';

const TodoContainer = props => {
	const { todos } = props;

	return <ul>{todos.map(todo => <SingleTodoPresentation key={todo.id} {...todo} {...props} />)}</ul>;
};

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { toggleTodoCompleted, deleteTodo })(TodoContainer);

TodoContainer.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		})
	)
};
