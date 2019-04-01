import React from 'react';
import { MovieItemPoster } from './MovieItemPoster';
import { shallow, mount } from 'enzyme';

describe('<MovieItemPoster />', () => {
    describe('Rendering', () => {
      it('should be call handler', () => {
        const handler = jest.fn();
        const component = mount(<MovieItemPoster handler={ handler } />);
        const btn = component.find('.item-poster-img').simulate('click');
        expect(handler).toHaveBeenCalled();
      });
    });
});