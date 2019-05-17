// @flow
import React from 'react';
import classNames from 'classnames';

type CaptionProps = {
  txtWhite: boolean;
  txtItalic: boolean;
  content: string;
}

const Caption = (props: CaptionProps) => {
  const { txtWhite, txtItalic, content } = props;

  const itemClass = classNames({
    txt: true,
    'txt-white': txtWhite,
    'txt-italic': txtItalic,
  });
  return (
    <p classNames={ itemClass }>
      {content}
    </p>
  );
};

export default Caption;
