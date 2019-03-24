import React from 'react';

export const Label = (props) => {

    return (
      	<div className={
			props.type === 'search' && 'label label-white label-uppercase label-bold'
		}>
        	{ props.content }
      	</div>
    );
};