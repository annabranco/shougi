import React, { Component } from 'react';
import BoardComponent from '../../views/BoardComponent';
import { BOARD_SIZE } from '../../settings/board';
import { getSquareDetails, getSquareId } from '../../utils';
import {
  W_OUSHOU,
  W_HISHA,
  W_KAKUGYOU,
  W_KYOUSHA_L,
  W_KYOUSHA_R,
  W_KEIMA_L,
  W_KEIMA_R,
  W_GINSHOU_L,
  W_GINSHOU_R,
  W_KINSHOU_L,
  W_KINSHOU_R,
  W_FUHYOU_1,
  W_FUHYOU_2,
  W_FUHYOU_3,
  W_FUHYOU_4,
  W_FUHYOU_5,
  W_FUHYOU_6,
  W_FUHYOU_7,
  W_FUHYOU_8,
  W_FUHYOU_9
} from '../setup/pieces';

class App extends Component {
  state = {
    currentBoard: undefined,
    selectedPiece: undefined,
    pieceCoordinates: undefined,
    allowedMoves: [],
    capturedPieces: []
  };

  componentDidMount() {
    this.generateBoard();
    this.setupGame();
  }

  setupGame = () => {
    this.placePiece(W_KYOUSHA_L, '1-1');
    this.placePiece(W_KEIMA_L, '1-2');
    this.placePiece(W_GINSHOU_L, '1-3');
    this.placePiece(W_KINSHOU_L, '1-4');
    this.placePiece(W_OUSHOU, '1-5');
    this.placePiece(W_KINSHOU_R, '1-6');
    this.placePiece(W_GINSHOU_R, '1-7');
    this.placePiece(W_KEIMA_R, '1-8');
    this.placePiece(W_KYOUSHA_R, '1-9');
    this.placePiece(W_KAKUGYOU, '2-2');
    this.placePiece(W_HISHA, '2-8');
    this.placePiece(W_FUHYOU_1, '3-1');
    this.placePiece(W_FUHYOU_2, '3-2');
    this.placePiece(W_FUHYOU_3, '3-3');
    this.placePiece(W_FUHYOU_4, '3-4');
    this.placePiece(W_FUHYOU_5, '3-5');
    this.placePiece(W_FUHYOU_6, '3-6');
    this.placePiece(W_FUHYOU_7, '3-7');
    this.placePiece(W_FUHYOU_8, '3-8');
    this.placePiece(W_FUHYOU_9, '3-9');
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

  movePiece = (coordinates, piece = this.state.selectedPiece) => {
    const { pieceCoordinates } = this.state;
    const { row, column } = getSquareDetails(coordinates);

    console.log(`Piece moved: ${piece.name} => row: ${row}, column: ${column}`);

    this.removePiece(pieceCoordinates);
    this.placePiece(piece, coordinates);
    this.handlePromotions(piece, coordinates);
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

  capturePiece = coordinates => {
    const { row, column } = getSquareDetails(coordinates);
    const capturedPiece = this.state.currentBoard[row][column];
    this.setState(prevState => ({
      capturedPieces: [...prevState.capturedPieces, capturedPiece]
    }));

    this.removePiece(coordinates);
    this.movePiece(coordinates);
  };

  onClickSquare = event => {
    const coordinates = event.currentTarget.id;

    const { selectedPiece } = this.state;
    if (selectedPiece && this.state.allowedMoves.includes(coordinates)) {
      this.movePiece(coordinates, selectedPiece);
    } else {
      this.unselectPieces();
    }
  };

  handlePromotions = (piece, coordinates) => {
    const { row } = getSquareDetails(coordinates);
    if (piece.team === 'white') {
      if (row >= BOARD_SIZE - 2 && piece.promotion) {
        this.removePiece(coordinates);
        this.placePiece(piece.promotion, coordinates);
      }
    } else if (row <= 3 && piece.promotion) {
      this.removePiece(coordinates);
      this.placePiece(piece.promotion, coordinates);
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
            capturePiece={this.capturePiece}
          />
        ) : (
          <h2>Loading</h2>
        )}
      </>
    );
  }
}

export default App;
