import { combineReducers } from 'redux';
import without from 'lodash/array/without';
import merge from 'lodash/object/merge';
import findKey from 'lodash/object/findKey';

import {
    CREATE_GAME,
    START_GAME,
    END_GAME
} from './actions';

const gameReducer = combineReducers({
    unusedTokens,
    games,
    players
});

function unusedTokens(state = [], action) {
    switch(action.type){
        case CREATE_GAME:
            return [...state, action.id];
        case START_GAME:
            return without(state, action.gameId);
        default:
            return state;
    }
}

function games(state = {}, action){
    let s = merge({}, state);
    switch(action.type){
        case CREATE_GAME:
            s[action.id] = {
                running: false,
                player: null
            };
            return s;
        case START_GAME:
            s[action.gameId] = {
                running: true,
                player: action.player.id
            };
            return s;
        case END_GAME:
            console.log('end game', action);
            delete s[findKey(s, {player: action.userId})];
            return s;
        default:
            return state;
    }
}

function players(state = {}, action){
    let s = merge({}, state);
    switch(action.type){
        case START_GAME:
            s[action.player.id] = action.player;
            return s;
        default:
            return state;
    }

}

export default gameReducer;
