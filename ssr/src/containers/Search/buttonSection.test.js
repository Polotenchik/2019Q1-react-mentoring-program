import React from 'react';
import { ButtonSection } from './ButtonSection';
import { shallow } from 'enzyme';

const mockFunc = jest.fn();

describe('<ButtonSection />', () => {
  describe('Render', () => {
    it('should render the component', () => {
      const wrapper = shallow(<ButtonSection searchButtonClick={ mockFunc }/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});