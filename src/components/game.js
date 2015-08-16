import { connect } from 'react-redux';

import { startGame } from '../actions';
import render from '../templates/game.jsx';

class Game {
    render() {
        const { dispatch } = this.props;
        let actions = {
            startButtonClick: () => {
                dispatch(startGame(
                    '123.456',
                    {
                        id: 'fcz11111',
                        firstName: 'Fabricio',
                        lastName: 'Zuardi',
                        username: 'fczuardi'
                    }
                ));
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
