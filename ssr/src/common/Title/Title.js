import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Title = (props) => {
  const {
    ttlRed, ttlWhite, ttlUC, ttlBig, content,
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
