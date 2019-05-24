import React from 'react';
import { Button } from './Button';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  describe('Rendering', () => {
    it('should render the button', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Configuration', () => {
    it('can be set as white', () => {
      expect(shallow(<Button type='header' btnWhite />).is('.btn-white')).toBe(true);
    });
    it('can be set as red', () => {
      expect(shallow(<Button type='search' btnRed />).is('.btn-red')).toBe(true);
    });
    it('can be set as grey', () => {
      expect(shallow(<Button type='sort' btnGrey />).is('.btn-grey')).toBe(true);
    });
  });
});