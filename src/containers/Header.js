import React from 'react';
import { TopBarSection } from '../components/TopBarSection';
import { Search } from './Search';

export const Header = () => {
    return (
        <header className={'header'} style={{ "background": "#000 url('img/netflix-bg.jpg')"}}>
            <div className={'header-container'}>
                <TopBarSection / >
                <Search />
            </div>
        </header>
    );
};