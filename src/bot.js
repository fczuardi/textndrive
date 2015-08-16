import telegramBot from 'node-telegram-bot-api';
import indexOf from 'lodash/array/indexOf';
import keys from 'lodash/object/keys';

import telegramConfig from '../conf/telegram';
import messages from '../locales/pt/messages';
import {startGame, endGame} from './actions';

let store;

let bot = new telegramBot(
    telegramConfig.token, {
        polling: {
            interval: 1000
        }
    });

let welcomeMessage = (chatId) => {
    bot.sendMessage(chatId, messages.start.welcome);
};

let quitMessage = (msg) => {
    store.dispatch(endGame(msg.from.id) );
    bot.sendMessage(msg.chat.id, messages.quit(msg.from.first_name));
};

let checkTextCommands = (msg) => {
    let storeState = store.getState(),
        unusedTokens = storeState.unusedTokens,
        allGames = keys(storeState.games),
        text = msg.text,
        isGameToken = (indexOf(allGames, text) !== -1),
        isGameAvailable = (indexOf(unusedTokens, text) !== -1),
        isPlayerPlaying = storeState.players[msg.from.id] !== undefined;

    //verify if there is an open game
    if (isGameToken){
        if (isPlayerPlaying){
            console.log('player still connected');
            bot.sendMessage(msg.chat.id, messages.start.alreadyPlaying);
        } else if (isGameAvailable){
            store.dispatch(startGame(text, msg.from) );
            bot.sendMessage(msg.chat.id, messages.start.activated);
        } else {
            console.log('game was already activated');
            bot.sendMessage(msg.chat.id, messages.start.notAvailable);
        }
    }else{
        console.log('checkTextCommands', msg);
        bot.sendMessage(msg.chat.id, messages.unknowCommand());
    }
};

let start = (storeRef) => {
    store = storeRef;
    console.log('Starting bot...');
    bot.on('text', function (msg) {
        switch (msg.text) {
            case '/start':
                welcomeMessage(msg.chat.id);
                break;
            case '/quit':
                quitMessage(msg);
                break;
            default :
                checkTextCommands(msg);
        }
    });
};

export default {
    start
};
