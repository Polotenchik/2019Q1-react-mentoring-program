import React from 'react';
import { shallow } from 'enzyme';
import { MovieItemPoster } from './MovieItemPoster';

const mockLinkText = 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg';
const mockFunc = jest.fn();

describe('<MovieItemPoster />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <MovieItemPoster
          posterLink={ mockLinkText }
          posterClick={ mockFunc }
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(
        <MovieItemPoster
          posterLink={ mockLinkText }
          posterClick={ mockFunc }
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Behavior', () => {
    it('invokes onClick', () => {
      shallow(<MovieItemPoster
        posterClick={ mockFunc }
        posterLink={ mockLinkText } />)
        .find('img')
        .simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
