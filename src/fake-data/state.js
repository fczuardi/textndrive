export default {
    unusedTokens: [
        '123.321',
        '234.654'
    ],
    games: {
        '123.321': {
            running:false,
            player: null
        },
        '123.456': {
            running: true,
            player: 'fcz11111'
        },
        '234.654': {
            running: false,
            player: null
        },
    },
    players: {
        'fcz11111': {
            id: 'fcz11111',
            firstName: 'Fabricio',
            lastName: 'Zuardi',
            username: 'fczuardi',
            currentGame: '123.456',
            credits: 10
        },
        'jd22222': {
            id: 'jd22222',
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            currentGame: null,
            credits: 10
        }
    }

};
