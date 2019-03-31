import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = (props) => {

	let itemClass = classNames({
		'btn': true,
		'btn-white': props.btnWhite,
		'btn-red': props.btnRed,
		'btn-grey': props.btnGrey,
	  });

	return (
		<div className={
			(props.type === 'header' && itemClass)
			|| ( props.type === 'search' && itemClass) 
			|| ( props.type === 'sort' && itemClass) 
			|| null
		}>
			{ props.content }
		</div>
	);
};

Button.propTypes = {
	btnWhite: PropTypes.bool,
	btnRed: PropTypes.bool,
	btnGrey: PropTypes.bool,
	content: PropTypes.string,
	id: PropTypes.string
};
  
Button.defaultProps = {
	btnWhite: false,
	btnRed: false,
	btnGrey: false,
	content: 'Button',
	id: ''
};