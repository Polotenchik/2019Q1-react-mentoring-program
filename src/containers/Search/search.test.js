import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../../store';
import Search from './Search';

const mockFunc = jest.fn();
const mockSearchPhraseText = 'star wars';
const mockEl = {
  target: {
    innerHTML: 'genres',
    value: 'some input',
  },
  key: 'Enter',
};
const mockNewType = 'genres';

describe('<Search />', () => {
  describe('Rendering', () => {
    it('should render the component in the search mode', () => {
      const wrapper = shallow(
            <Provider store={ store }>
                <Search onSearch={ mockFunc } searchMode/>
            </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with default props', () => {
      const wrapper = shallow(
            <Provider store={ store }>
                <Search onSearch={ mockFunc } searchMode/>
            </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should not render the component with disabled searchMode', () => {
      expect(shallow(
            <Provider store={ store }>
                <Search onSearch={ mockFunc }/>
            </Provider>,
      ).is('.header-search')).toBe(false);
    });
  });
//   describe('Methods', () => {
//     let instance;
//     beforeAll(() => {
//           instance = shallow(<SearchChild onSearch={mockFunc}/>).instance();
//     });
//     afterEach(() => {
//       jest.clearAllMocks();
//     });
//     describe('startSearching', () => {
//       it('should reset currentInputValue in the state', () => {
//         instance.state = {
//           currentInputValue: mockSearchPhraseText,
//           searchTypes: {
//             list: ['title', 'genres'],
//             active: 'title'
//           }
//         };
//         instance.startSearching();
//         expect(instance.state.currentInputValue).toEqual('');
//       });
//     });
//     describe('changeSearchType', () => {
//       it('should set searchType in the state', () => {
//         instance.state = {
//           searchTypes: {
//             list: ['title', 'genres'],
//             active: 'title'
//           }
//         };
//         instance.changeSearchType(mockNewType);
//         expect(instance.state.searchTypes.active).toEqual(mockEl.target.innerHTML);
//       });
//     });
//     describe('cloneSearchInput', () => {
//       it('should set currentInputValue in the state', () => {
//         instance.state = {
//           currentInputValue: ''
//         };
//         instance.cloneSearchInput(mockEl);
//         expect(instance.state.currentInputValue).toEqual(mockEl.target.value);
//       });
//     });
//     describe('enterKeyPressedOnInput', () => {
//       it('should reset currentInputValue in the state', () => {
//         instance.state = {
//           currentInputValue: mockSearchPhraseText,
//           searchTypes: {
//             list: ['title', 'genres'],
//             active: 'title'
//           }
//         };
//         instance.enterKeyPressedOnInput(mockEl);
//         expect(instance.state.currentInputValue).toEqual('');
//       });
//     });
});
