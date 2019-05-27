import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from '../../common';

export const ButtonSection = ({ searchButtonClick }) => (
        <Link to="/search">
            <Button
                content='Search'
                btnClick={ searchButtonClick }
                btnRed
                btnBig
            />
        </Link>
);
