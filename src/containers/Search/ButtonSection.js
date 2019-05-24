import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

const ButtonSection = ({ searchButtonClick }) => (
    <Link to="/search">
        <Button
            content='Search'
            btnClick={ searchButtonClick }
            btnRed
            btnBig
        />
    </Link>
);

export default ButtonSection;
