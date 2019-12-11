import React, { Component } from 'react';
import { GameArea, InfoArea, InfoText } from './styles';
import { WHITE, BLACK } from '../../../system/constants';
import GameHandler from '../GameHandler/index';

class MainArea extends Component {
  state = {
    player: BLACK,
    turn: 1,
    testingMode: false
  };

  componentDidMount() {
    window.testing = this.toggleTesting;
    window.change = this.changeTurn;
    window.testing();
  }

  changeTurn = () => {
    if (!this.state.testingMode) {
      this.setState(prevState => ({
        player: prevState.player === BLACK ? WHITE : BLACK,
        turn: prevState.player === WHITE ? prevState.turn + 1 : prevState.turn
      }));
    }
  };

  toggleTesting = () =>
    this.setState(prevState => ({ testingMode: !prevState.testingMode }));

  render() {
    const { player, turn, testingMode } = this.state;
    return (
      <>
        {(player === WHITE || testingMode) && (
          <InfoArea team={WHITE}>
            <InfoText>
              {testingMode ? 'Testing mode' : `後手の${turn}ターン`}
            </InfoText>
          </InfoArea>
        )}
        <GameArea>
          <GameHandler
            player={player}
            changeTurn={this.changeTurn}
            testingMode={testingMode}
          />
        </GameArea>
        {(player === BLACK || testingMode) && (
          <InfoArea team={BLACK}>
            <InfoText>
              {testingMode ? 'Testing mode' : `先手の${turn}ターン`}
            </InfoText>
          </InfoArea>
        )}
      </>
    );
  }
}

export default MainArea;
