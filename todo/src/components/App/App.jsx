import React from 'react';
import { Provider } from 'react-redux';
import TodoContainer from '../Todo/TodoContainer';
import Form from '../Todo/Form';
import { store } from '../../state/store/store';

export const App = () => {
	return (
		<Provider store={store}>
			<div className="todo">
				<h2 className="h2">Welcome to your Todo App!</h2>
				<div className="content">
					<section className="todo-list-container">
						<TodoContainer />
					</section>

					<section className="form-container">
						<Form />
					</section>
				</div>
			</div>
		</Provider>
	);
};
