import React from 'react';
import { TopBarSection } from '../components/TopBarSection';
import { Search } from './Search';
import { MovieDescription } from './MovieDescription';

export const Header = (props) => {

    if (props.headerType === 'info') {
        return (
            <header className='header' style={{ "background": "#000 url('img/netflix-bg.jpg')" }}>
                <div className='header-container'>
                    <TopBarSection headerType={ props.headerType } />
                    <MovieDescription />
                </div>
            </header>
        );
    }

    return (
        <header className='header' style={{ "background": "#000 url('img/netflix-bg.jpg')"}}>
            <div className='header-container'>
                <TopBarSection / >
                <Search />
            </div>
        </header>
    );
};