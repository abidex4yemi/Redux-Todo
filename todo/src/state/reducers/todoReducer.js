import * as actionTypes from '../actions/types';
import { todoArray } from '../../constants';

export const todoReducer = (state = todoArray, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return [...state, action.payload];
		case actionTypes.TOGGLE_TODO_Completed:
			return state.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						completed: !todo.completed
					};
				}

				return todo;
			});
		case actionTypes.DELETE_TODO:
			return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
};
