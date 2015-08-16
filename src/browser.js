import Game from './components/game';
import { render } from 'react-dom';
import { createElement } from 'react';

render(
    createElement(Game, null),
    document.getElementById('main')
);
