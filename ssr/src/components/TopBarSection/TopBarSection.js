import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../index';
import { Button } from '../../common';
import { Link, Route } from 'react-router-dom';

export const TopBarSection = ({ movieMode, searchButtonClick }) => {
    return  (
        <div className={'topbar'}>
            <Logo/>
            {  movieMode && <Link to={`/search/`}><Button content='search' btnWhite btnClick={ searchButtonClick }/></Link> }
        </div>
    );
};

TopBarSection.defaultProps ={
  movieMode: false
};
