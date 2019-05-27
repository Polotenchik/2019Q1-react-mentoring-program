import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { Logo } from '../index';
import { Button } from '../../common';

export const TopBarSection = ({ movieMode, searchButtonClick }) => (
        <div className={'topbar'}>
            <Logo/>
            { movieMode && <Link to={'/search/'}><Button content='search' btnWhite btnClick={ searchButtonClick }/></Link> }
        </div>
);

TopBarSection.defaultProps = {
  movieMode: false,
};
