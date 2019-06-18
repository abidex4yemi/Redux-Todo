import uuid from 'uuid';
import * as actionTypes from './types';

export const addNewTodo = description => {
	return {
		type: actionTypes.ADD_TODO,
		payload: {
			id: uuid(),
			description,
			completed: false
		}
	};
};

export const toggleTodoCompleted = id => {
	return {
		type: actionTypes.TOGGLE_TODO_Completed,
		payload: id
	};
};

export const deleteTodo = id => {
	return {
		type: actionTypes.DELETE_TODO,
		payload: id
	};
};
