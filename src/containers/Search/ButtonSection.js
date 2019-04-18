import React from 'react';
import { Button } from  '../../common';

export const ButtonSection = ({searchButtonClick}) => {
    return (
        <Button 
            content='Search' 
            btnClick={ searchButtonClick } 
            btnRed 
            btnBig
        />
    );
}