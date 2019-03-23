import React from 'react';
import { Input } from '../common/Input';
//import {TypeSection} from 'src/components/search/type-section/type-section.js';
//import {ButtonSection} from 'src/components/search/button-section/button-section.js';

export const Search = () => {
    return  (
        <div className={'header-search'}>
            <h2>Find your movie</h2>
            <Input />
            {/* <div className={'search-components'}>
                <TypeSection />
                <ButtonSection />
            </div> */}
        </div>
    );
};