import React from 'react';
import { TopBarSection } from '../components/TopBarSection';
import { Search } from './Search';
import { MovieDescription } from './MovieDescription';

export const Header = (props) => {

    return (
        <header className='header' style={{ "background": "#000 url('img/netflix-bg.jpg')" }}>
            <div className='header-container'>
                {   (props.headerType === 'info') 
                    ? (<>
                        <TopBarSection headerType={ props.headerType } />
                        <MovieDescription movie={ props.id } />
                    </>)
                    : (<>
                        <TopBarSection />
                        <Search />
                    </>)
                }

            </div>
        </header>
    );
};