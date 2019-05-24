import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Label = ({ labelUC, labelWhite, labelBold, content }) => {
	const itemClass =classNames({
		'label': true,
		'label-uppercase': labelUC,
		'label-white': labelWhite,
		'label-bold': labelBold,
	});
	
    return (
      	<div className={ itemClass }>
        	{ content }
      	</div>
    );
};

Label.defaultProps = {
  labelBold: false,
  content: 'Label',
  labelUC: false,
  labelWhite: false
};