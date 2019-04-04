import React from 'react';
import { getMoives } from '../../data';
import { Title, Rating, Label } from '../../common';

export const MovieDescription = (props) => {

    const data = getMoives().data;
    const index = data.findIndex(item => { return item['id'] === props.movie });
    const movie = data[index];

    return (
        <div className="movie-description">
            <div className="movie-description-poster">
                 <img src={ movie['poster_path'] } />
            </div>
            <div className='movie-description-info'>
                <div className='movie-description-info-header' >
                    <div>
                        <Title content={ movie['title']} type='info' />
                    </div>
                    <div>
                        <Rating value ={ +movie['vote_average'] }/>
                    </div>
                </div> 
                <p className='caption'>{ movie['tagline'] }</p>
                <div className='year-min'>
                    <Label 
                        content={ movie['release_date'] ? movie['release_date'].slice(0,4): movie['release_date'] }
                        type='info'
                    />
                    <Label 
                        content={ movie['runtime'] ? movie['runtime'] + ' min' : movie['runtime'] } 
                        type='info'
                    />
                </div>
                <p className='caption'>{ movie['overview'] }</p>
            </div>
        </div>
    );
};
