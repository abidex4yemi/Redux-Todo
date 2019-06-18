import uuid from 'uuid';
import { ADD_TODO, TOGGLE_TODO_Completed, DELETE_TODO } from './types';

export const addNewTodo = description => {
	return {
		type: ADD_TODO,
		payload: {
			id: uuid(),
			description,
			completed: false
		}
	};
};

export const toggleTodoCompleted = id => {
	return {
		type: TOGGLE_TODO_Completed,
		payload: id
	};
};

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id
	};
};
