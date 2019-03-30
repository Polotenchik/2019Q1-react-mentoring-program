import React from 'react';

export const MovieItemInfo = (props) => {

    return (
    <div className='item-info'>
        <div className='item-info-details'>
        <div className='film-title'>
            {   props.filmTitle.length > 16 
                ? props.filmTitle.slice(0,18) + '...' 
                :  props.filmTitle 
            }
        </div>
        <div className='release-date'>
            { props.releaseDate.slice(0,4) }
        </div>
        </div>
        <div className='item-info-genre'>
        { props.genre.join(', ') }
        </div>
    </div>
    )
};
