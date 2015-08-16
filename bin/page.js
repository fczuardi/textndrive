import { renderToStaticMarkup } from 'react-dom/server';
import { DOM, createElement } from 'react';
import {html} from 'js-beautify';

import Page from '../src/components/page';

let options = {
    lang: 'pt',
    charSet: 'utf-8',
    title: 'Text & Drive',
    stylesheets: [
        '//fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700',
        '//cdn.muicss.com/mui-0.1.21/css/mui.min.css',
        './css/main.css'
    ],
    scripts: [
        './lib/js/es5-shim.js',
        './lib/js/es5-sham.js',
        './lib/js/console-polyfill.js',
        '$comment=es-polyfills',
        '//cdn.muicss.com/mui-0.1.21/js/mui.min.js',
        '$comment=es-mui',
        './js/vendors.js',
        '$comment=game',
        './js/game.js',
        '$comment=game',
    ]
};


console.log(
html(
    renderToStaticMarkup(
        createElement(Page, options,
            DOM.div({id: 'main', className: 'mnmo-root'},
                DOM.p(null, 'carregando...')
            )
        )
    )
).replace(/(<script[^\"]*\"\$comment\=)([^\"]*)(\">[^>]*>)/ig, '<!-- $2 -->\n')
);
