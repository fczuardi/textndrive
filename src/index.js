import { createStore } from 'redux';
import keys from 'lodash/object/keys';

import game from './reducers';
import { generateNextToken } from './helpers/token';
import { createGame } from './actions';
import webServer from './api';

let store = createStore(game);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Start creating 3 games
let tokens = ['', '', ''];
tokens = tokens.map( () =>
    generateNextToken(keys(store.getState().games))
);
tokens.forEach( (token) => {
    store.dispatch(createGame(token));
});
// store.dispatch(startGame(tokens[1], {
//             id: 'fcz11111',
//             firstName: 'Fabricio',
//             lastName: 'Zuardi',
//             username: 'fczuardi'
//         }
// ));
// let player = {
//     id: 'jd22222',
//     firstName: 'John',
//     lastName: 'Doe',
//     username: 'johndoe'
// };
// store.dispatch(startGame(tokens[2], player));

// let action = endGame(tokens[2]);
// console.log('action', action);
// store.dispatch(endGame(tokens[2]) );


webServer.start(store);

// Stop listening to state updates
unsubscribe();
