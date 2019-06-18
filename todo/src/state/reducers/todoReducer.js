import * as actionTypes from '../actions/types';
import { todoArray } from '../../constants';

export const todoReducer = (state = todoArray, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return [...state, action.payload];

		default:
			return state;
	}
};
