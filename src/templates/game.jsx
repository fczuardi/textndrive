import React from 'react';
export default (p, a) =>
<div
    className='mui-container'
    style={{

    }}
>
    <h1
        className='mui-text-display3 mui-text-white'
    >Text & Drive</h1>
    <div
        className='mui-panel'
    >
        <h2
            className='mui-text-subhead mui-text-accent'
        >insert coin</h2>
        <p>
            unusedTokens:{p.unusedTokens}
        </p>
        <button
            onClick={a.startButtonClick}
            className={'mui-btn mui-btn-primary mui-btn-raised'}
        >
            Start Game
        </button>
    </div>
    <a href="https://github.com/fczuardi/textndrive">view source (AGPL-3.0)</a>
</div>
