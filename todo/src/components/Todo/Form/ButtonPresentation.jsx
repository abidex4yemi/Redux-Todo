import React from 'react';
import PropTypes from 'prop-types';

export const ButtonPresentation = ({ labelText, type, onClick, id }) => {
	return (
		<button type={type} onClick={onClick}>
			{labelText}
		</button>
	);
};

ButtonPresentation.propTypes = {
	labelText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

ButtonPresentation.defaultProps = {
	type: 'text'
};
