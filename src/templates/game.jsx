import React from 'react';
export default (p, a) =>
<div
    className='mui-container'
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
        <div
            className=''
            id='game-panel'
        >
        <p>Adicione o bot 
        <a href='https://telegram.me/semcomp15_bot'>@semcomp15_bot</a>
        para receber informacoes da central</p>
        </div>
        <button
            onClick={a.startButtonClick}
            className={'mui-btn mui-btn-primary mui-btn-raised'}
        >
            Start Game
        </button>
    </div>
    <a href="https://github.com/fczuardi/textndrive">view source (AGPL-3.0)</a>
</div>
