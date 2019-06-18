import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonPresentation } from '../Form/ButtonPresentation';

const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SingleTodoPresentation = props => {
	const { description, completed, id, toggleTodoCompleted, deleteTodo } = props;
	const addNewClass = completed ? 'strike-through' : '';

	const handleDelete = () => {
		deleteTodo(id);
	};

	const handleTodoToggle = () => {
		toggleTodoCompleted(id);
	};

	return (
		<ListItem>
			<div className={`list-item ${addNewClass}`} onClick={handleTodoToggle}>
				{description}
			</div>
			<ButtonPresentation labelText="Delete" type="button" onClick={handleDelete} />
		</ListItem>
	);
};

SingleTodoPresentation.propTypes = {
	description: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
};
