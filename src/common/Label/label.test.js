import React from 'react';
import { Label } from './Label';
import { shallow } from 'enzyme';

const mockContent = 'foo bar';

describe('<Label />', () => {
  describe('Rendering', () => {
    it('should render the label', () => {
      const wrapper = shallow(<Label content={ mockContent } />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Configuration', () => {
    it('can set white color for the text', () => {
      expect(shallow(<Label type='search' />).is('.label-white')).toBe(true);
    });
    it('can transform the text to the uppercase', () => {
      expect(shallow(<Label type='search' />).is('.label-uppercase')).toBe(true);
    });
    it('can set the bold weight for the text', () => {
      expect(shallow(<Label type='info' />).is('.label-bold')).toBe(true);
    });
  });
});