import React from 'react';
import { Logo } from '../index';
import { Button } from '../../common';

export const TopBarSection = (props) => {
    return  (
        <div className={'topbar'}>
            <Logo/>
            { (props.headerType === 'info')  && <Button content='search' type='header' btnWhite /> }
        </div>
    );
};
