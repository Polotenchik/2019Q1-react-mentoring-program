import React, {Component} from 'react';
import classNames from 'classnames';

export const Button = (props) => {
	return (
		<div className={
			props.type === 'header' && 'btn btn-white'
			}
		>
			{ props.content }
		</div>
	);
};
