import React from 'react';
import { Footer } from './Footer';
import { shallow } from 'enzyme';

describe('<Footer />', () => {
  describe('<Footer />', () => {
    it('should render footer', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});