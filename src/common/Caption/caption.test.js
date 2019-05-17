import React from 'react';
import { shallow } from 'enzyme';
import { Caption } from './Сaption';

const mockText = 'Text for test';

describe('<Caption />', () => {
  it('should render the caption', () => {
    const wrapper = shallow(<Caption />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the caption content', () => {
    const wrapper = shallow(<Caption content={ mockText }/>);
    expect(wrapper.text()).toBe(mockText);
  });
});
