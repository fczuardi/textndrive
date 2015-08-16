import { createStore } from 'redux';
import { render } from 'react-dom';
import keys from 'lodash/object/keys';
import { createElement } from 'react';
import { Provider } from 'react-redux';

import game from './reducers';
import { createGame } from './actions';
import { generateNextToken } from './helpers/token';
import Game from './components/game';

let store = createStore(game);


// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Start creating 3 games
let tokens = ['', '', ''];
tokens = tokens.map( () =>
    generateNextToken(keys(store.getState().games))
);

console.log('tokens', tokens);
tokens.forEach( (token) => {
    store.dispatch(createGame(token));
});


let rootElement = document.getElementById('main');

render(
    createElement(Provider, {store: store},
        () => createElement(Game, null)
    ),
    rootElement
);
