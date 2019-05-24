import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';

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
