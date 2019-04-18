import {  START_SEARCH, RESULTS_TO_STORE, OPEN_MOVIE,
    RECOMMENDED_TO_STORE, OPEN_SEARCH, CHANGE_SORTING } from './actionTypes';
import { startSearch, resultsToStore, openMovie,
    recommendedToStore, openSearch, changeItem } from './actions';

describe('actions', () => {
    it('startSearch success', () => {
        const result = startSearch('koala', 'action')
    
        expect(result)
            .toEqual({
                type: START_SEARCH,
                payload: {
                   searchPhrase: 'koala',
                   searchType: 'action',
                   replaceCurrentResultsBy: [],
                   loadingData: true
                }
            });
    });

    it('resultsToStore success', () => {
        const results = ['1', '2', '3']
        const result = resultsToStore(results)
    
        expect(result)
            .toEqual({
                type: RESULTS_TO_STORE,
                payload: {
                    foundResults: results,
                    loadingData: false
                }
            });
    });

    it('openMovie success', () => {
        const movie = {
            title: 'Fight Club',
            genres: ["Action", "Drama"]
        }
        const result = openMovie(movie)
    
        expect(result)
            .toEqual({
                type: OPEN_MOVIE,
                payload: {
                    movieToOpen: { ...movie },
                    movieGenre: movie['genres'][0],
                    loadingData: true,
                    searchType: 'genres'
                }
            });
    });

    it('recommendedToStore success', () => {
        const results = ['1', '2', '3']
        const result = recommendedToStore(results)
    
        expect(result)
            .toEqual({
                type: RECOMMENDED_TO_STORE,
                payload: {
                    foundRecommended: results,
                    loadingData: false
                }
            });
    });

    it('openSearch success', () => {
        const result = openSearch();

        expect(result)
            .toEqual({
                type: OPEN_SEARCH,
                payload: { }
            });
    });

    it('changeItem success', () => {
        const result = changeItem('rating');

        expect(result)
            .toEqual({
                type: CHANGE_SORTING,
                payload: {
                    chosenParameter: 'rating'
                }
            });
    });
});