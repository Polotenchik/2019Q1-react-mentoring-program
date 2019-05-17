import React from 'react';
import { Button, Label } from '../../common';

const TypeSection = ({ searchTypes, searchTypeClick }) => (
    <div className={'search-type-section'}>
        <Label content={'search by'} labelUC labelWhite />
        { searchTypes.list.map(item => (
                <Button
                    btnRed={ item === searchTypes.active }
                    btnGrey={ item !== searchTypes.active }
                    key={ item }
                    content={ item }
                    btnClick={ searchTypeClick }
                    btnInline
                    btnUC
                />
        ))
        }
    </div>
);

export default TypeSection;
