import React from 'react';
import { Title } from './Title';
import { shallow } from 'enzyme';

describe('<Title />', () => {
  describe('Rendering', () => {
    it('should render the title', () => {
      const wrapper = shallow(<Title />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Configuration', () => {
    it('can be set as white title', () => {
      expect(shallow(<Title ttlWhite />).is('.title-white')).toBe(true);
    });
    it('can be set as uppercase title', () => {
        expect(shallow(<Title ttlUC />).is('.title-uppercase')).toBe(true);
      });
    it('can be set as red title', () => {
      expect(shallow(<Title ttlRed />).is('.title-red')).toBe(true);
    });
    it('can be set as big title', () => {
        expect(shallow(<Title ttlBig />).is('.title-big')).toBe(true);
      });
  });
});