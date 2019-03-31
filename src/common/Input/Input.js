import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
    return (
        <input 
            className={ 'search-input' }
            type='text'
            placeholder={ props.placeholder } 
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
};
  
Input.defaultProps = {
    placeholder: 'Start typing...',
};