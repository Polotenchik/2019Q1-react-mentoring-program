import React from 'react';
import { Input } from './Input';
import { shallow } from 'enzyme';

const mockText = 'foo bar quux';

describe('<Input />', () => {
  describe('Rendering', () => {
    it('should render input component', () => {
      const wrapper = shallow(<Input
        placeholder={ mockText }
      />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render input component', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
