import React from 'react';
import { shallow } from 'enzyme';
import { NoResultsBlock } from './NoResultsBlock';

describe('<NoResultsBlock />', () => {
  describe('<NoResultsBlock />', () => {
    it('should render NoResultBlock', () => {
      const wrapper = shallow(<NoResultsBlock />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
