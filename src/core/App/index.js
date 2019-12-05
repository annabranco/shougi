import React, { Component } from 'react';
import Board from '../../views/Board';
import { KING } from '../setup/pieces';

class App extends Component {
  state = {
    board: {
      1: { 1: undefined, 2: undefined, 3: undefined },
      2: { 1: undefined, 2: undefined, 3: undefined },
      3: { 1: undefined, 2: undefined, 3: undefined }
    }
  };

  getSquareDetails = square => {
    const [row, column] = square.split(/-/);
    return { row, column };
  };

  placePiece = (piece, square) => {
    const { row, column } = this.getSquareDetails(square);
    console.log('$$$ row, column', row, column);

    this.setState(prevState => ({
      board: {
        ...prevState.board,
        [row]: {
          ...prevState.board[row],
          [column]: piece
        }
      }
    }));
  };

  componentDidMount() {
    this.placePiece(KING, '1-2');
  }

  render() {
    return <Board state={this.state.board} />;
  }
}

export default App;
