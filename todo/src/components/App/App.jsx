import React from 'react';
import { Provider } from 'react-redux';
import TodoContainer from '../Todo/TodoContainer';
import { store } from '../../state/store/store';

export const App = () => {
	return (
		<Provider store={store}>
			<TodoContainer />
		</Provider>
	);
};
