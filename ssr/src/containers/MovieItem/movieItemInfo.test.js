import React from 'react';
import { MovieItemInfo } from './MovieItemInfo';
import { shallow } from 'enzyme';

const mockFilmTitleText = 'Star Wars';
const mockFilmReleaseDateText = '2017-08-08';
const mockFilmGenreArray = ['comedy', 'action', 'drama'];

const mockFilmTitleLongText = 'Guardians of the Galaxy. Episode 1. Part 2. Intro'

describe('<MovieItemInfo />', () => {

    it('should render the component', () => {
        const wrapper = shallow(
            <MovieItemInfo 
                movieTitle={ mockFilmTitleText }
                releaseDate={ mockFilmReleaseDateText }
                genre = { mockFilmGenreArray }
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with long title (more than 17 characters)', () => {
        const wrapper = shallow(
            <MovieItemInfo 
                movieTitle={ mockFilmTitleLongText }
                releaseDate={ mockFilmReleaseDateText }
                genre={ mockFilmGenreArray }
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});