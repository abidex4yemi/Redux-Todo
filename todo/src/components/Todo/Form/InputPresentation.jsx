import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyled = styled.input`
	display: block;
	width: 100%;
	height: 25px;
	font-size: 1.5em;
	margin-bottom: 1.5rem;
	border: 2px solid #f4f4f4;
	padding: 3px 8px;
	outline: 0;
	transition: 0.2s;

	&:focus {
		border-color: #da1b60;
		font-size: 1.5em;
	}
`;

export const InputPresentation = ({ type, value, name, inputChange, error, placeholder }) => {
	return (
		<div>
			<InputStyled
				type={type}
				value={value}
				name={name}
				onChange={evt => inputChange(evt.target.name, evt.target.value)}
				placeholder={placeholder}
			/>
			<small>{error || ''}</small>
		</div>
	);
};

InputPresentation.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired,
	error: PropTypes.string,
	placeholder: PropTypes.string
};

InputPresentation.defaultProps = {
	type: 'text'
};
