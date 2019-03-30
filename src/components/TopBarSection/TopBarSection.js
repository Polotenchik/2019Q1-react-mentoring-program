import React from 'react';
import { Logo } from './Logo';
import { Button } from '../common/Button';

export const TopBarSection = (props) => {
    return  (
        <div className={'topbar'}>
            <Logo/>
            { (props.headerType === 'info')  && <Button content='search' type='header' btnWhite /> }
        </div>
    );
};
