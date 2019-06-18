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

export const markAsCompleted = id => {
	return {
		type: actionTypes.MARK_TODO_AS_COMPLETED,
		payload: id
	};
};

export const deleteTodo = id => {
	return {
		type: actionTypes.DELETE_TODO,
		payload: id
	};
};
