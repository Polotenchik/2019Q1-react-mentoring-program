import { OPEN_MOVIE, OPEN_SEARCH, START_SEARCH,
  RESULTS_TO_STORE, RECOMMENDED_TO_STORE } from '../actionTypes';
import mode from './mode';

describe('mode reducer', () => {
  it('OPEN_MOVIE success', () => {
    const state = {
      search: true,
      movie: false,
      loadingData: false
    };

    const action = {
      type: OPEN_MOVIE,
      payload: {
        loadingData: true
      }
    };

    const results = mode(state, action);

    expect(results)
      .toEqual({
          search: false,
          movie: true,
          loadingData: true
      })
  });

  it('OPEN_SEARCH success', () => {
    const state = {
      search: true,
      movie: false,
      loadingData: false
    };

    const action = {
      type: OPEN_SEARCH,
    };

    const results = mode(state, action)
    expect(results)
      .toEqual({
          search: true,
          movie: false,
          loadingData: false
      })
  });

  it('START_SEARCH success', () => {
    const state = {
      search: true,
      movie: false,
      loadingData: false
    };

    const action = {
      type: START_SEARCH,
      payload: {
        loadingData: true
      }
    };

    const results = mode(state, action)
    expect(results)
      .toEqual({
          search: true,
          movie: false,
          loadingData: true
      })
  });

  it('RESULTS_TO_STORE success', () => {
    const state = {
      search: true,
      movie: false,
      loadingData: false
    };

    const action = {
      type: RESULTS_TO_STORE,
      payload: {
        loadingData: true
      }
    };

    const results = mode(state, action)
    expect(results)
      .toEqual({
          search: true,
          movie: false,
          loadingData: true
      })
  });

  it('RECOMMENDED_TO_STORE success', () => {
    const state = {
      search: true,
      movie: false,
      loadingData: false
    };

    const action = {
      type: RECOMMENDED_TO_STORE,
      payload: {
        loadingData: true
      }
    };

    const results = mode(state, action)
    expect(results)
      .toEqual({
          search: true,
          movie: false,
          loadingData: true
      })
  });

  it('DEFAULT success', () => {
    const state = {
      search: true,
      movie: false,
      loadingData: false
    };

    const action = {
      type: 'FOO',
    };

    const results = mode(state, action)
    expect(results)
      .toEqual({
          search: true,
          movie: false,
          loadingData: false
      });
  });
});