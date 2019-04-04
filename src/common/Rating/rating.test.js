import React from 'react';
import { Rating } from './Rating';
import { shallow } from 'enzyme';

const mockNumber = '42';

describe('<Rating />', () => {
  describe('Rendering', () => {
    it('should render rating label', () => {
      const wrapper = shallow(<Rating value={ mockNumber }/>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render rating label with mock value', () => {
      const wrapper = shallow(<Rating />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});