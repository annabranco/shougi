import React, { Component } from 'react';
import BoardComponent from '../../views/BoardComponent';
import { BOARD_SIZE } from '../setup/board';
import { getSquareDetails, getSquareId } from '../../utils';
import {
  OUSHOU,
  KYOUSHA,
  NARIKYOU,
  FUHYOU,
  KEIMA,
  HISHA,
  KAKUGYOU
} from '../../database';

class App extends Component {
  state = {
    currentBoard: undefined,
    selectedPiece: undefined,
    pieceCoordinates: undefined,
    allowedMoves: []
  };

  componentDidMount() {
    this.generateBoard();
    this.setupGame();
  }

  setupGame = () => {
    this.placePiece(OUSHOU, '3-6');
    this.placePiece(FUHYOU, '5-4');
    this.placePiece(KYOUSHA, '4-5');
    this.placePiece(NARIKYOU, '4-2');
    this.placePiece(KEIMA, '6-6');
    this.placePiece(HISHA, '3-5');
    this.placePiece(KAKUGYOU, '5-2');
  };

  generateBoard = () => {
    const currentBoard = {};
    const xAxis = {};

    for (let n = 1; n <= BOARD_SIZE; n += 1) {
      xAxis[n] = undefined;
    }
    for (let n = 1; n <= BOARD_SIZE; n += 1) {
      currentBoard[n] = xAxis;
    }
    this.setState({ currentBoard });
  };

  onSelectPiece = (piece, pieceCoordinates, moves) => {
    const allowedMoves = moves.map(move => getSquareId(move));
    this.setState({ selectedPiece: piece, pieceCoordinates, allowedMoves });
  };

  unselectPieces = () =>
    this.setState({ selectedPiece: undefined, allowedMoves: [] });

  movePiece = (piece, coordinates) => {
    const { pieceCoordinates } = this.state;
    const { row, column } = getSquareDetails(coordinates);

    console.log(`Piece moved: ${piece.name} => row: ${row}, column: ${column}`);

    this.removePiece(pieceCoordinates);
    this.placePiece(piece, coordinates);
  };

  removePiece = (coordinates = this.state.pieceCoordinates) => {
    const { row, column } = getSquareDetails(coordinates);

    this.setState(prevState => ({
      currentBoard: {
        ...prevState.currentBoard,
        [row]: {
          ...prevState.currentBoard[row],
          [column]: undefined
        }
      }
    }));
  };

  placePiece = (piece, coordinates) => {
    const { row, column } = getSquareDetails(coordinates);

    this.setState(prevState => ({
      currentBoard: {
        ...prevState.currentBoard,
        [row]: {
          ...prevState.currentBoard[row],
          [column]: piece
        }
      }
    }));
    this.unselectPieces();
  };

  onClickSquare = event => {
    const coordinates = event.currentTarget.id;

    const { selectedPiece } = this.state;
    if (selectedPiece && this.state.allowedMoves.includes(coordinates)) {
      this.movePiece(selectedPiece, coordinates);
    } else {
      this.unselectPieces();
    }
  };

  render() {
    const { currentBoard, selectedPiece, allowedMoves } = this.state;
    return (
      <>
        {currentBoard ? (
          <BoardComponent
            currentBoard={currentBoard}
            onSelectPiece={this.onSelectPiece}
            selectedPiece={selectedPiece}
            allowedMoves={allowedMoves}
            onClickSquare={this.onClickSquare}
          />
        ) : (
          <h2>Loading</h2>
        )}
      </>
    );
  }
}

export default App;
