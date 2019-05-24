import React from 'react';
import { shallow } from 'enzyme';
import { ButtonSection } from './ButtonSection';

const mockFunc = jest.fn();

describe('<ButtonSection />', () => {
  describe('Render', () => {
    it('should render the component', () => {
      const wrapper = shallow(<ButtonSection searchButtonClick={ mockFunc }/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
