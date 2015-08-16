import { renderToStaticMarkup } from 'react-dom/server';
import { DOM, createElement } from 'react';
import {html} from 'js-beautify';

import Page from '../src/components/page';

let options = {
    lang: 'pt',
    charSet: 'utf-8',
    title: 'Text & Drive',
    stylesheets: [
        './lib/css/normalize.css',
    ],
    scripts: [
        './lib/js/es5-shim.js',
        './lib/js/es5-sham.js',
        './lib/js/console-polyfill.js',
        '$comment=es-polyfills',
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
