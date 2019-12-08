import React, { Component } from 'react';
import BoardComponent from '../../views/BoardComponent';
import { BOARD_SIZE } from '../../../system/setup';
import {
  getSquareDetails,
  getSquareId,
  getFromBoard
} from '../../../system/utils';
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
  W_FUHYOU_9,
  B_KYOUSHA_L,
  B_KEIMA_L,
  B_GINSHOU_L,
  B_KINSHOU_L,
  B_GYOKUSHOU,
  B_KINSHOU_R,
  B_GINSHOU_R,
  B_KEIMA_R,
  B_KYOUSHA_R,
  B_KAKUGYOU,
  B_HISHA,
  B_FUHYOU_1,
  B_FUHYOU_2,
  B_FUHYOU_3,
  B_FUHYOU_4,
  B_FUHYOU_5,
  B_FUHYOU_6,
  B_FUHYOU_7,
  B_FUHYOU_8,
  B_FUHYOU_9,
  ALL_PIECES
} from '../../../system/setup/pieces';
import { PlayingArea } from './styles';
import CapturedArea from '../../views/CapturedArea';
import { WHITE, EMPTY_SQUARES, BLACK } from '../../../system/constants';

class BoardHandler extends Component {
  state = {
    currentBoard: undefined,
    selectedPiece: undefined,
    pieceCoordinates: undefined,
    allowedMoves: [],
    capturedPieces: {
      black: [],
      white: []
    }
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

    this.placePiece(B_KYOUSHA_L, '9-1');
    this.placePiece(B_KEIMA_L, '9-2');
    this.placePiece(B_GINSHOU_L, '9-3');
    this.placePiece(B_KINSHOU_L, '9-4');
    this.placePiece(B_GYOKUSHOU, '9-5');
    this.placePiece(B_KINSHOU_R, '9-6');
    this.placePiece(B_GINSHOU_R, '9-7');
    this.placePiece(B_KEIMA_R, '9-8');
    this.placePiece(B_KYOUSHA_R, '9-9');
    this.placePiece(B_KAKUGYOU, '8-2');
    this.placePiece(B_HISHA, '8-8');
    this.placePiece(B_FUHYOU_1, '7-1');
    this.placePiece(B_FUHYOU_2, '7-2');
    this.placePiece(B_FUHYOU_3, '7-3');
    this.placePiece(B_FUHYOU_4, '7-4');
    this.placePiece(B_FUHYOU_5, '7-5');
    this.placePiece(B_FUHYOU_6, '7-6');
    this.placePiece(B_FUHYOU_7, '7-7');
    this.placePiece(B_FUHYOU_8, '7-8');
    this.placePiece(B_FUHYOU_9, '7-9');
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
    let allowedMoves = moves;
    if (typeof moves[0] === 'object') {
      allowedMoves = moves.map(move => getSquareId(move));
    }
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

  capturePiece = (coordinates, capturer) => {
    const { row, column } = getSquareDetails(coordinates);
    let capturedPiece = this.state.currentBoard[row][column];
    const capturedTeam = capturedPiece.id.includes('white') ? WHITE : BLACK;

    const cleanId = capturedPiece.id.includes('captured_')
      ? capturedPiece.id.slice(9)
      : capturedPiece.id;

    const newId = capturedPiece.id.includes('captured_')
      ? capturedPiece.id.slice(9)
      : `captured_${capturedPiece.id}`;

    const updatePromotion = mirrorPiece => {
      if (mirrorPiece.promotion) {
        const updatedPromotion = {
          ...mirrorPiece.promotion
        };
        const { id } = capturedPiece.promotion;

        if (id.includes('captured_')) {
          updatedPromotion.id = id.slice(9);
        } else {
          updatedPromotion.id = `captured_${id}`;
        }
        return updatedPromotion;
      }
      return null;
    };
    const capturedPieceIndex = ALL_PIECES[capturedTeam].findIndex(
      piece => piece.id === cleanId
    );
    const mirrorPiece = ALL_PIECES[capturer][capturedPieceIndex];

    capturedPiece = {
      ...capturedPiece,
      team: capturer,
      id: newId,
      promotion: updatePromotion(mirrorPiece)
    };

    this.setState(prevState => ({
      capturedPieces: {
        ...prevState.capturedPieces,
        [capturer]: [...prevState.capturedPieces[capturer], capturedPiece]
      }
    }));

    this.removePiece(coordinates);
    setTimeout(() => this.movePiece(coordinates), 1);
  };

  isCaptured = piece => {
    const { capturedPieces } = this.state;
    return capturedPieces[piece.team].find(
      captured => captured.id === piece.id
    );
  };

  onClickSquare = event => {
    const coordinates = event.currentTarget.id;

    const { selectedPiece } = this.state;
    if (selectedPiece && this.state.allowedMoves.includes(coordinates)) {
      if (this.isCaptured(selectedPiece)) {
        this.dropPiece(coordinates, selectedPiece);
      } else {
        this.movePiece(coordinates, selectedPiece);
      }
    } else {
      this.unselectPieces();
    }
  };

  handlePromotions = (piece, coordinates) => {
    const { row } = getSquareDetails(coordinates);
    if (piece.team === WHITE) {
      if (row >= BOARD_SIZE - 2 && piece.promotion) {
        this.removePiece(coordinates);
        this.placePiece(piece.promotion, coordinates);
      }
    } else if (row <= 3 && piece.promotion) {
      this.removePiece(coordinates);
      this.placePiece(piece.promotion, coordinates);
    }
  };

  onClickCaptured = event => {
    const { currentBoard, capturedPieces } = this.state;
    const {
      dataset: { team },
      id
    } = event.currentTarget;
    const piece = capturedPieces[team].find(captured => captured.id === id);

    const allPossibilities = getFromBoard(currentBoard, EMPTY_SQUARES);

    // const movements = this.calculateAllMovements(pieceCoordinates);
    const movements = allPossibilities;
    this.onSelectPiece(piece, '0-0', movements);
  };

  dropPiece = (coordinates, piece = this.state.selectedPiece) => {
    const updatedCapturedPieces = this.state.capturedPieces[piece.team].filter(
      captured => captured.id !== piece.id
    );
    const { row, column } = getSquareDetails(coordinates);
    console.log(
      `Piece dropped: ${piece.name} => row: ${row}, column: ${column}`
    );

    this.setState(prevState => ({
      capturedPieces: {
        ...prevState.capturedPieces,
        [piece.team]: updatedCapturedPieces
      }
    }));
    this.placePiece(piece, coordinates);
  };

  render() {
    const {
      currentBoard,
      selectedPiece,
      allowedMoves,
      capturedPieces
    } = this.state;
    window.board = currentBoard;

    return (
      <>
        {currentBoard ? (
          <PlayingArea>
            <CapturedArea
              team="black"
              capturedPieces={capturedPieces.black}
              selectedPiece={selectedPiece}
              onClick={this.onClickCaptured}
            />
            <BoardComponent
              currentBoard={currentBoard}
              onSelectPiece={this.onSelectPiece}
              selectedPiece={selectedPiece}
              allowedMoves={allowedMoves}
              onClickSquare={this.onClickSquare}
              capturePiece={this.capturePiece}
            />
            <CapturedArea
              team="white"
              capturedPieces={capturedPieces.white}
              selectedPiece={selectedPiece}
              onClick={this.onClickCaptured}
            />
          </PlayingArea>
        ) : (
          <h2>Loading</h2>
        )}
      </>
    );
  }
}

export default BoardHandler;
