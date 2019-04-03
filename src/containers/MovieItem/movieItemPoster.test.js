import React from 'react';
import { MovieItemPoster } from './MovieItemPoster';
import { shallow, mount } from 'enzyme';

describe('<MovieItemPoster />', () => {
    describe('Check behavior MovieItemPoster component', () => {
      it('should be call handler', () => {
        const handler = jest.fn();
        const component = mount(<MovieItemPoster handler={ handler } />);
        const imgPoster = component.find('.item-poster-img').simulate('click');
        expect(handler).toHaveBeenCalled();
      });

      it('should be return id from handler', () => {
        const handler = jest.fn((id) => id);
        const id = 337167;
        const component = mount(<MovieItemPoster handler={ handler } />);
        const imgPoster = component.find('.item-poster-img').simulate('click');
        expect(handler(id)).toBe(id);
      });
    });
});