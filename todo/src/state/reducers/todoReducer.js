import { ADD_TODO, TOGGLE_TODO_Completed, DELETE_TODO } from '../actions/types';
import { todoArray } from '../../constants/todos';

export const todoReducer = (state = todoArray, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];
		case TOGGLE_TODO_Completed:
			return state.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						completed: !todo.completed
					};
				}

				return todo;
			});
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
};
