import React from 'react';
import { Label, Button } from '../../common';

export const Summary = (props) => {
    return (
        <div className='summary'>
            <div className='summary-wrapper'>
                { props.type === 'info' && <Label content={'Films by Drama genre'} /> }
                { props.type === 'search' && <Label content={'7 movies found'} /> }
                { props.type === 'search' &&  
                    (<div className='film-sort'>
                        <Label content='Sort by '/> 
                        <Button content='release date' type='sort' btnGrey />
                        <Button content='raring' type='sort' btnGrey />
                    </div>)
                }
            </div>
        </div>
    );
}