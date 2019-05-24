import React from 'react';
import { Body } from './Body';
import { shallow } from 'enzyme';

describe('<Body />', () => {
  describe('Rendering', () => {
    it('should render the Body', () => {
      const wrapper = shallow(<Body />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});