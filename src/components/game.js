import { connect } from 'react-redux';

// import { startGame } from '../actions';
import render from '../templates/game.jsx';
import clientGame from '../browser.game.js';

class Game {
    componentDidMount() {
        console.log('game DOM ready');
        clientGame.start('game-panel');
    }
    render() {
        // const { dispatch } = this.props;
        let actions = {
            startButtonClick: () => {
                window.open('http://textndrive.nulo.com.br:3033/new');
                // dispatch(startGame(
                //     '123.456',
                //     {
                //         id: 'fcz11111',
                //         firstName: 'Fabricio',
                //         lastName: 'Zuardi',
                //         username: 'fczuardi'
                //     }
                // ));
            }
        };
        return render(this.props, actions);
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    unusedTokens: state.unusedTokens
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Game);
