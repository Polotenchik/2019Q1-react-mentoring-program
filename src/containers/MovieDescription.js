import React from 'react';
import { getMoives } from '../data';
import { Title } from '../common/Title';
import { Rating } from '../common/Rating';
import { Label } from '../common/Label';

const movie = getMoives().data[0];

export const MovieDescription = () => {
    return (
        <div className="film">
            <div className="film-poster">
                <img src={movie['poster_path']} />
            </div>
            <div className='film-info'>
                <div className='film-header' >
                    <div>
                        <Title content={ movie['title']} />
                    </div>
                    <div>
                        <Rating value ={ +movie['vote_average'] }/>
                    </div>
                </div>
                <p>{ movie['tagline'] }</p>
                <div className='year-min'>
                    <Label content={ movie['release_date'] ? movie['release_date'].slice(0,4): movie['release_date'] } />
                    <Label content={ movie['overview'] ? movie['overview'] + ' min' : movie['overview'] } />
                </div>
                <p>{ movie['overview']}</p>
            </div>
        </div>
    );
};