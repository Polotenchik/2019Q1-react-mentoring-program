import React from 'react';
import { Input } from '../common/Input';
import { Title } from '../common/Title';
import { Button } from '../common/Button';
import { Label } from '../common/Label';

export const Search = () => {
    return  (
        <div className={'header-search'}>
            <Title content='Find your movie' type='headline' />
            <Input />
            <div className={'search-components'}>
                <div className={'search-type-section'}>
                    <Label content={'search by'} type='search' />
                    <Button content='Title' type='search' />
                    <Button content='Genre' type='search' />
                </div>
                <div>
                    <Button content='Search' type='search' />
                </div>
            </div>
        </div>
    );
};