import React from 'react';
import { TypeSection } from './TypeSection';
import { shallow } from 'enzyme';

const mockSearchTypes = {
  list: ['title', 'genres'],
  active: 'title'
};

const mockFunc = jest.fn();

describe('<TypeSection />', () => {
  describe('Render', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <TypeSection 
            searchTypes={ mockSearchTypes }
            searchTypeClick={ mockFunc }
        />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});