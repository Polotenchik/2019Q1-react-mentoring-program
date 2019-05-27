import React from 'react';
import './label.scss';
import classNames from 'classnames';

const Label = ({
  labelUC, labelWhite, labelBlack, labelBold, content,
}) => {
  const itemClass = classNames({
    label: true,
    'label-uppercase': labelUC,
    'label-white': labelWhite,
    'label-black': labelBlack,
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
  labelWhite: false,
  labelBlack: false,
};

export default Label;
