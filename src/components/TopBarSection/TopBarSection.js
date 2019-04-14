import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../index';
import { Button } from '../../common';

export const TopBarSection = ({ movieMode, searchButtonClick }) => {
    return  (
        <div className={'topbar'}>
            <Logo/>
            { movieMode && <Button content='search' btnWhite btnClick={ searchButtonClick }/> }
        </div>
    );
};

TopBarSection.defaultProps ={
  movieMode: false
};
