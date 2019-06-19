import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	width: 100px;
	height: 30px;
	font-size: 1.5em;
	transition: 0.2s;
	border: 0;
	text-align: center;
	cursor: pointer;
	outline: 0;
	background: #da1b60;
	color: white;

	&:hover {
		background: #7a0530;
	}

	&:active {
		transform: translateY(3px);
	}
`;

export const ButtonPresentation = ({ labelText, type, onClick }) => {
	return (
		<ButtonStyled type={type} onClick={onClick}>
			{labelText}
		</ButtonStyled>
	);
};

ButtonPresentation.propTypes = {
	labelText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

ButtonPresentation.defaultProps = {
	type: 'text'
};
