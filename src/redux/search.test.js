import {  START_SEARCH } from '../actionTypes';
import search from './search';

describe('search reducer', () => {
    it('START_SEARCH success', () => {
        const state = { 
            phrase: "",
            type: ""
        };

        const action = {
            type: START_SEARCH,
            payload: {
                searchPhrase: "action",
                searchType: "genre"
            }
        };
  
        const results = search(state, action);
  
        expect(results)
            .toEqual({
                phrase: "action",
                type: "genre"
            });
    });

    it('DEFAULT success', () => {
        const state = {
            phrase: "action",
            type: "genre"
        };
    
        const action = {
          type: 'FOO',
        };
    
        const results = search(state, action)
        expect(results)
            .toEqual({
                phrase: "action",
                type: "genre"
            });
    });


});    