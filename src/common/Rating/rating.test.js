import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from './Rating';

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
