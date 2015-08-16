import React from 'react';
export default (p, a) =>
<div>
    <h1>Text & Drive</h1>
    <h2>insert coin</h2>
    <p>
        unusedTokens:{p.unusedTokens}
    </p>
    <button
        onClick={a.startButtonClick}
    >
        Start Game
    </button>
    <a href="https://github.com/fczuardi/textndrive">view source (AGPL-3.0)</a>
</div>
