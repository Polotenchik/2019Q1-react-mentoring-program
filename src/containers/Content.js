import React from 'react';
import { MovieItem } from './MovieItem';
import { Summary } from './Summary';
import { NoResultsBlock } from '../components/NoResultsBlock';

export const Content = (props) => {
    if (!!props.movies && props.movies.data.length > 0) {
        return (
            <>
                <Summary type={ props.headerType } />
                <div className='results'>
                    { props.movies.data.map((item) => (
                        <MovieItem 
                            key={ item['id'] }
                            info={ item }
                            handler = { props.handler }
                        />
                    ))}
                </div>
            </>
        );
    } else {
        return (<NoResultsBlock />);
    }
};