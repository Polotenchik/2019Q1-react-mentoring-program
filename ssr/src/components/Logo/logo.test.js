import React from 'react';
import { Logo } from './Logo.js';
import { shallow } from 'enzyme';

describe('<Logo />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});