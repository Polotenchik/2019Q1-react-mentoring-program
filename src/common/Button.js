import React, {Component} from 'react';

export const Button = (props) => {
	return (
		<div className={
			(props.type === 'header' && 'btn btn-white')
			|| ( props.type === 'search' && 'btn btn-red') 
			|| ( props.type === 'sort' && 'btn btn-grey') 
			|| null
		}>
			{ props.content }
		</div>
	);
};
