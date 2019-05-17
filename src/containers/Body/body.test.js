import React from 'react';
import { shallow } from 'enzyme';
import { Body } from './Body';

describe('<Body />', () => {
  describe('Rendering', () => {
    it('should render the Body', () => {
      const wrapper = shallow(<Body />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
