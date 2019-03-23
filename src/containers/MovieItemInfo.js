import React from 'react';

export const MovieItemInfo = (props) => {

 // let title = filmTitle.length > 16 ? filmTitle.slice(0,18) + '...' :  filmTitle;

return (
  <div className='item-info'>
    <div className='item-info-details'>
      <div className='film-title'>
        { props.title }
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
