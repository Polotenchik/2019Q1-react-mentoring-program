import React from 'react';
import { shallow } from 'enzyme';
import { Label } from './Label';

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
      expect(shallow(<Label labelWhite />).is('.label-white')).toBe(true);
    });
    it('can transform the text to the uppercase', () => {
      expect(shallow(<Label labelUC />).is('.label-uppercase')).toBe(true);
    });
    it('can set the bold weight for the text', () => {
      expect(shallow(<Label labelBold />).is('.label-bold')).toBe(true);
    });
  });
});
