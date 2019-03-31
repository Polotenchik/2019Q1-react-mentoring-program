import React from 'react';
import { MovieDescription } from './MovieDescription';
import { shallow } from 'enzyme';

const mockMovieId =  337167;

describe('<MovieDescription />', () => {
  describe('Rendering', () => {
    it('should render MovieDescription', () => {
      const wrapper = shallow(<MovieDescription movie={ mockMovieId } />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});