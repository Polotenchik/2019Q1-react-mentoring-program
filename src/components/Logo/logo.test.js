import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './Logo.js';

describe('<Logo />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
