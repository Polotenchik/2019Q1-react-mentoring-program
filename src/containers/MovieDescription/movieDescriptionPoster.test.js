import React from 'react';
import { shallow } from 'enzyme';
import { MovieDescriptionPoster } from './MovieDescriptionPoster';

const mockPath = 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg';

describe('<MovieDescriptionPoster />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<MovieDescriptionPoster posterPath={ mockPath } />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
