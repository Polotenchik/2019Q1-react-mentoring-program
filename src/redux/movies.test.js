import { OPEN_MOVIE, OPEN_SEARCH, START_SEARCH,
    RESULTS_TO_STORE, RECOMMENDED_TO_STORE, CHANGE_SORTING } from '../actionTypes';
import movies from './movies';

describe('movies reducer', () => {
    it('START_SEARCH success', () => {
        const state = { };
        const list = ['1', '2', '3'];

        const action = {
            type: START_SEARCH,
            payload: {
                replaceCurrentResultsBy: list
            }
        };
  
        const results = movies(state, action);
  
        expect(results)
            .toEqual({
                searchList: list,
            });
    });

    it('OPEN_MOVIE success', () => {
        const state = { 
            currentMovie: null,
            currentMovieGenre: " "
        };

        const action = {
            type: OPEN_MOVIE,
            payload: {
                movieToOpen: "Fight Club",
                movieGenre: "action"
            }
        };
  
        const results = movies(state, action);
  
        expect(results)
            .toEqual({
                currentMovie: "Fight Club",
                currentMovieGenre: "action"
            });
    });

    it('RESULTS_TO_STORE success', () => {
        const state = { };
        const list = ['1', '2', '3'];

        const action = {
            type: RESULTS_TO_STORE,
            payload: {
                foundResults: list
            }
        };
  
        const results = movies(state, action);
  
        expect(results)
            .toEqual({
                searchList: list,
            });
    });

    it('RECOMMENDED_TO_STORE success', () => {
        const state = { };
        const list = ['1', '2', '3'];

        const action = {
            type: RECOMMENDED_TO_STORE,
            payload: {
                foundRecommended: list
            }
        };
  
        const results = movies(state, action);
  
        expect(results)
            .toEqual({
                recommendedList: list,
            });
    });

    it('CHANGE_SORTING success', () => {
        const state = { 
            sortBy: {
                parameters: ["release date", "rating"],
                chosenParameter: "release date"
            }
        };

        const moviesSorting = (state={}, action) => {
            switch (action.type) {
                case CHANGE_SORTING :
                    return {
                        sortBy: {
                            parameters: ["release date", "rating"],
                            chosenParameter: "rating"
                        }
                    };
                default:
                    return state;
            }
        };

        const action = {
            type: CHANGE_SORTING,
            payload: {
                chosenParameter: "rating"
            }
        };

        const results = movies(moviesSorting(state.sortBy, action), action);
  
        expect(results)
            .toEqual({
                sortBy: {
                    parameters: ["release date", "rating"],
                    chosenParameter: "rating"
                }
            });
    });

    it('DEFAULT success', () => {
        const state = {
            currentMovie: null,
            currentMovieGenre: " "
        };
    
        const action = {
          type: 'FOO',
        };
    
        const results = movies(state, action)
        expect(results)
            .toEqual({
                currentMovie: null,
                currentMovieGenre: " "
            });
    });
});  