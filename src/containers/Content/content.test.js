import React from 'react';
import { render } from 'enzyme';
import { Content } from './Content';
import store from '../../store';
import { Provider } from 'react-redux';

const mockSortBy1= {
  parameters: ['release date', 'rating'],
  chosenParameter: 'rating'
};

const mockSortBy2= {
  parameters: ['rating', 'release date'],
  chosenParameter: 'release date'
};

const mockFilm1 = {
  "id": 337167,
  "title": "Fifty Shades Freed",
  "tagline": "Don't miss the climax",
  "vote_average": 6.1,
  "vote_count": 1195,
  "release_date": "2018-02-07",
  "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
  "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
  "budget": 55000000,
  "revenue": 136906000,
  "genres": [
    "Drama",
    "Romance"
  ],
  "runtime": 106
};

const mockFilm2 ={
  "id": 269149,
  "title": "Zootopia",
  "tagline": "Welcome to the urban jungle.",
  "vote_average": 7.7,
  "vote_count": 6795,
  "release_date": "2016-02-11",
  "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
  "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
  "budget": 150000000,
  "revenue": 1023784195,
  "genres": [
    "Animation",
    "Adventure",
    "Family",
    "Comedy"
  ],
  "runtime": 108
};

const mockFilm3 = {
  "id": 181808,
  "title": "Star Wars: The Last Jedi",
  "tagline": "The Saga Continues",
  "vote_average": 7.1,
  "vote_count": 4732,
  "release_date": "2017-12-13",
  "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  "budget": 200000000,
  "revenue": 1325937250,
  "genres": [
    "Fantasy",
    "Adventure",
    "Science Fiction"
  ],
  "runtime": 152
};

const mode1 = {
  movie: false,
  search: true,
  loadingData: false
};

const mode2 = {
  movie: true,
  search: false,
  loadingData: false
};

const mode3 = {
  movie: false,
  search: true,
  loadingData: true
};

const mode4 = {
  movie: true,
  search: false,
  loadingData: true
};

const mockSearchingAttributes1 = {
  phrase: '',
  type: 'title'
};

const mockSearchingAttributes2 = {
  phrase: 'dfdfdfdf',
  type: 'title'
};

const mockSearchingAttributes3 = {
  phrase: 'star wars',
  type: 'title'
};

const mockSomeResults = [mockFilm3, mockFilm1, mockFilm2];
const mockSomeRecomededList = [mockFilm1, mockFilm2];
const mockNoResults = [];

describe('<Content />', () => {
  describe('Rendering', () => {

    // it('should render content', () => {
    //   const wrapper = render( <Content headerType='search' movies={ mockMovies } />);
    //   expect(wrapper).toMatchSnapshot();
    // });

    // it('should render content with no results', () => {
    //   const wrapper = render( <Content headerType='search' movies={ mockNoResults } />);
    //   expect(wrapper).toMatchSnapshot();
    // });


    it('should render the component with default props', () => {
      const wrapper = render( <Provider store={store}><Content sortBy={ mockSortBy1 }/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the search mode with no results', () => {
      const wrapper = render( <Provider store={store}><Content sortBy={ mockSortBy1 } searchList={ mockNoResults } searchAttributes ={ mockSearchingAttributes2 } mode={ mode1 }/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the search mode with the welcome message', () => {
      const wrapper = render( <Provider store={store}><Content sortBy={mockSortBy1} searchList={mockNoResults} searchAttributes ={mockSearchingAttributes1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the search mode with results sorted by the rating', () => {
      const wrapper = render( <Provider store={store}><Content sortBy={mockSortBy1} searchList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the search mode with results sorted by the release date', () => {
      const wrapper = render( <Provider store={store}><Content sortBy={mockSortBy2} searchList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the search mode with an active loadingData status', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy2} searchList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode3}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the film mode with results sorted by the release date', () => {
      const wrapper = render( <Provider store={store}>
          <Content sortBy={mockSortBy2} searchList={mockSomeResults} recommendedList={mockSomeRecomededList} searchAttributes ={mockSearchingAttributes3}  mode={mode2}/>
          </Provider>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the film mode with results sorted by the rating', () => {
      const wrapper = render( <Provider store={store}>
          <Content sortBy={mockSortBy1}  recommendedList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode2}/>
          </Provider>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component in the film mode with an active loadingData status', () => {
      const wrapper = render( <Provider store={store}>
          <Content sortBy={mockSortBy1}  recommendedList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode4}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
  });
});