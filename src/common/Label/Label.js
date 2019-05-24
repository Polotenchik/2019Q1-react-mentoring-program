import React from 'react';
import classNames from 'classnames';

const Label = ({
  labelUC, labelWhite, labelBold, content,
}) => {
  const itemClass = classNames({
    label: true,
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
  labelWhite: false,
};

export default Label;
