// @flow
import React from 'react';

type InputProps = {
  placeholder: string,
  onStartTyping: Function,
  onKeyEnterPressed: Function,
  value: string,
}

const Input = (props: InputProps) => {
  const {
    onStartTyping, onKeyEnterPressed, placeholder = 'Start typing...', value = '',
  } = props;

  return (
      <input
          className={ 'search-input' }
          type='text'
          placeholder={ placeholder }
          onInput = { onStartTyping }
          onKeyPress={ onKeyEnterPressed }
          value = { value }
      />
  );
};

export default Input;
