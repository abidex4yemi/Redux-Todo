import { combineReducer } from 'redux';
import { todoReducer } from './todoReducer';

export default combineReducer({
	todos: todoReducer
});
