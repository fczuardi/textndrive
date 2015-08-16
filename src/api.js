import { join } from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import serveStatic from 'koa-static';
import keys from 'lodash/object/keys';

import serverConfig from '../conf/server';
import { generateNextToken } from './helpers/token';
import { createGame } from './actions';

const ROOT = join(__dirname, '../dist/www/');

let web = Koa();
let api = Koa();
let router = Router();
let store;

// serve static files
web.use(serveStatic(ROOT));

api.use(function* serveJSON(next){
    this.set('Content-Type', 'application/json');
    yield next;
});

//routes
router.get(serverConfig.api.newGame, function *(next){
    console.log('New game route');
    let storeState = store.getState(),
        token = generateNextToken(keys(storeState.games));
    store.dispatch(createGame(token));
    this.body = token;
    yield next;
});

//router responses
api.use(router.routes());

api.use(function *(){
    if (this.body === undefined){
        this.body = JSON.stringify({message: 'not found -.'});
    }
    yield {};
});

let start = (storeRef) => {
    store = storeRef;
    console.log('Serving staic on port', serverConfig.port);
    web.listen(serverConfig.port);
    console.log('Serving JSON API on port', serverConfig.apiPort);
    api.listen(serverConfig.apiPort);
};

export default {
    start
};
