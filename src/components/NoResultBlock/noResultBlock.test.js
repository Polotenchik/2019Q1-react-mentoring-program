import React from 'react';
import { NoResultsBlock } from './NoResultsBlock';
import { shallow } from 'enzyme';

describe('<NoResultsBlock />', () => {
  describe('<NoResultsBlock />', () => {
    it('should render NoResultBlock', () => {
      const wrapper = shallow(<NoResultsBlock />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});