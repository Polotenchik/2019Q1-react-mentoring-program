import React from 'react';
import { shallow } from 'enzyme';
import { TypeSection } from './TypeSection';

const mockSearchTypes = {
  list: ['title', 'genres'],
  active: 'title',
};

const mockFunc = jest.fn();

describe('<TypeSection />', () => {
  describe('Render', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <TypeSection
            searchTypes={ mockSearchTypes }
            searchTypeClick={ mockFunc }
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
