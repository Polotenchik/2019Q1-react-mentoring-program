import React from 'react';
import PropTypes from 'prop-types';
import { Title, Rating, Label } from '../../common';

export const MovieDescriptionInfo = ({ info }) => {
    return (
        <div className='movie-description-info'>
            <div className='movie-description-info-header' >
                <div>
                    <Title content={ info['title']}  />
                </div>
                <div>
                    <Rating value ={ +info['vote_average'] }/>
                </div>
            </div> 
            <p className='caption'>{ info['tagline'] }</p>
                <div className='year-min'>
                    <Label 
                        content={ info['release_date'] ? info['release_date'].slice(0,4) : info['release_date'] }/>
                    <Label 
                        content={ info['runtime'] ? info['runtime'] + ' min' : info['runtime'] } 
                    />
                </div>
            <p className='caption'>{ info['overview'] }</p>
        </div>
    );
};
        