import React from 'react';
import classNames from 'classnames';

const Title = (props) => {
  const {
    ttlRed, ttlWhite, ttlUC, ttlBig,
  } = props;
  const itemClass = classNames({
    title: true,
    'title-red': ttlRed,
    'title-white': ttlWhite,
    'title-uppercase': ttlUC,
    'title-big': ttlBig,
  });

  return (
        <h2 className={ itemClass }>
            { props.content }
        </h2>
  );
};

Title.defaultProps = {
  ttlBig: false,
  ttlUC: false,
  ttlRed: false,
  ttlWhite: false,
  content: 'Title',
};

export default Title;
