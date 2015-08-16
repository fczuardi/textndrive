import React from 'react';
export default (p) =>
<html lang={p.lang}>
    <head>
        <meta charSet={p.charSet} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {p.stylesheets.map(
           (href, key) => <link href={href} key={key} rel="stylesheet" />
        )}
        <title>{p.title}</title>
    </head>
    <body>
        {p.children}
        {p.scripts.map(
            (src, key) => <script src={src} key={key}></script>
        )}
    </body>
</html>;
