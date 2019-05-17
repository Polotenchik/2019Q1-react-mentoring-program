import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';
import { Button } from '../../common';

const TopBarSection = ({ movieMode, searchButtonClick }) => (
    <div className={'topbar'}>
        <Logo/>
        {
          movieMode
          && <Link to="/search">
                <Button content='search' btnWhite btnClick={ searchButtonClick } />
              </Link>
        }
    </div>
);

TopBarSection.defaultProps = {
  movieMode: false,
};

export default TopBarSection;
