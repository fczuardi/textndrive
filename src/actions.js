//action types
export const CREATE_GAME = 'CREATE_GAME';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const DECREASE_CREDIT = 'DECREASE_CREDIT';

//action creators
export function createGame(id) {
    return {
        type: CREATE_GAME,
        id
    };
}
export function startGame(gameId, player) {
    return {
        type: START_GAME,
        gameId,
        player
    };
}
export function endGame(userId) {
    return {
        type: END_GAME,
        userId
    };
}

export function decreaseCredit(playerId) {
    return {
        type: DECREASE_CREDIT,
        playerId
    };
}
