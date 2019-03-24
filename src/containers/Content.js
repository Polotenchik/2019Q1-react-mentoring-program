import React from 'react';
import { getMoives } from '../data';
import { MovieItem } from './MovieItem';
import { NoResultsBlock } from '../components/NoResultsBlock';

const response = getMoives();

export const Content = (props) => {
    if (props.contentType === 'films') {
        return (
            <>
                {/* <Summary /> */}
                <div className='results'>
                    { response.data.map((item) => (
                        <MovieItem 
                            key={ item['id'] }
                            info={ item }
                            // onPosterClick={ this.chooseFilmByClick }
                        />
                    ))}
                </div>
            </>
        );
    } else if (props.contentType === 'no_films') {
        return (<NoResultsBlock />);
    }
};