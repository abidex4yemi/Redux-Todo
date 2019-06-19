import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import TodoContainer from '../Todo/TodoContainer';
import Form from '../Todo/Form';
import { store } from '../../state/store/store';
import './App.css';

const AppStyled = styled.div`
	width: 1000px;
	margin: 70px auto;

	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 50px;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-around;
`;

const ListContainer = styled.section`
	width: 50%;
	border-right: 1px solid #da1b60;
	padding-right: 50px;
	max-height: 400px;
	overflow: auto;
`;

export const App = () => {
	return (
		<Provider store={store}>
			<AppStyled>
				<h2>Welcome to your Todo App!</h2>
				<Content>
					<ListContainer className="todo-list-container">
						<TodoContainer />
					</ListContainer>

					<section className="form-container">
						<Form />
					</section>
				</Content>
			</AppStyled>
		</Provider>
	);
};
