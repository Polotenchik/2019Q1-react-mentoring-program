import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  describe('Rendering', () => {
    it('should render default header', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});