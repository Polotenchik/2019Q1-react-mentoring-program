import React from 'react';
import { Input, Title, Button, Label } from '../../common';

export const Search = () => {
    return  (
        <div className={'header-search'}>
            <Title content='Find your movie' type='headline' />
            <Input />
            <div className={'search-components'}>
                <div className={'search-type-section'}>
                    <Label content={'search by'} type='search' />
                    <Button content='Title' type='search' btnRed />
                    <Button content='Genre' type='search' btnRed />
                </div>
                <div>
                    <Button content='Search' type='search' />
                </div>
            </div>
        </div>
    );
};