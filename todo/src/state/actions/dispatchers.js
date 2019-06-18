import uuid from 'uuid';
import { ADD_TODO } from './types';
import { MARK_TODO_AS_COMPLETED } from './types';
import { DELETE_TODO } from './types';

export const addTodo = description => {
	return {
		type: ADD_TODO,
		payload: {
			id: uuid(),
			description,
			completed: false
		}
	};
};

export const markAsCompleted = id => {
	return {
		type: MARK_TODO_AS_COMPLETED,
		payload: id
	};
};

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id
	};
};
