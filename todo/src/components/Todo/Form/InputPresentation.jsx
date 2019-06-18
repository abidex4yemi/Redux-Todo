import React from 'react';
import PropTypes from 'prop-types';

export const ButtonPresentation = ({ type, value, name, inputChange, error }) => {
	return (
		<div>
			<input type={type} value={value} name={name} onChange={evt => inputChange(evt.target.field, evt.target.value)} />
			<small>{error || ''} </small>
		</div>
	);
};

ButtonPresentation.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired
};

ButtonPresentation.defaultProps = {
	type: 'text'
};
