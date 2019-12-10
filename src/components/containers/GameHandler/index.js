import React, { Component } from 'react';
import BoardComponent from '../../views/BoardComponent';
import { BOARD_SIZE } from '../../../system/setup';
import {
  getSquareDetails,
  getSquareId,
  getFromBoard
} from '../../../system/utils';
import {
  ALL_PIECES,
  PROMOTIONS,
  DEMOTIONS
} from '../../../system/setup/pieces';
import { PlayingArea } from './styles';
import CapturedArea from '../../views/CapturedArea';
import { COLUMNS_WITH_PAWNS } from '../../../system/constants/modifiers';
import {
  WHITE,
  BLACK,
  EMPTY_SQUARES,
  NUMBERS,
  ATTACK,
  PASS_THROUGH,
  IS_PAWN,
  IS_LANCE,
  IS_KNIGHT
} from '../../../system/constants';

class GameHandler extends Component {
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
    Object.keys(ALL_PIECES).forEach(team => {
      ALL_PIECES[team].forEach(piece => {
        if (piece.initialSetup) {
          this.placePiece(piece, piece.initialSetup);
        }
      });
    });
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

  selectPiece = (piece, pieceCoordinates, moves) => {
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

    console.info(`${column}${NUMBERS[row]}${piece.shortName}`);

    this.removePiece(pieceCoordinates);
    this.placePiece(piece, coordinates);
    this.willPromotePiece(piece, coordinates);
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

  updatePromotion = (capturedPiece, mirrorPiece) => {
    if (capturedPiece.promotion) {
      const updatedPromotion = PROMOTIONS[mirrorPiece.id];
      const { id } = capturedPiece.promotion;

      if (id.includes('captured_')) {
        updatedPromotion.id = id.slice(9);
      } else {
        updatedPromotion.id = `captured_${id}`;
      }
      return { promotion: updatedPromotion };
    }
    if (capturedPiece.demotion) {
      const updatedDemotion = DEMOTIONS[mirrorPiece.id];
      const { id } = capturedPiece.demotion;

      if (id.includes('captured_')) {
        updatedDemotion.id = id.slice(9);
      } else {
        updatedDemotion.id = `captured_${id}`;
      }
      return { demotion: updatedDemotion };
    }
    return null;
  };

  capturePiece = (coordinates, capturer) => {
    const { row, column } = getSquareDetails(coordinates);
    let capturedPiece = this.state.currentBoard[row][column];
    const capturedTeam = capturedPiece.id.includes(WHITE) ? WHITE : BLACK;

    if (capturedPiece.demotion) {
      capturedPiece.demotion.id = capturedPiece.id.includes('captured_')
        ? `captured_${capturedPiece.demotion.id}`
        : capturedPiece.demotion.id;
      capturedPiece = capturedPiece.demotion;
    }
    const cleanId = capturedPiece.id.includes('captured_')
      ? capturedPiece.id.slice(9)
      : capturedPiece.id;

    const newId = capturedPiece.id.includes('captured_')
      ? `${capturer}_${capturedPiece.id.slice(15)}`
      : `captured_${capturer}_${capturedPiece.id.slice(6)}`;

    const capturedPieceIndex = ALL_PIECES[capturedTeam].findIndex(
      piece => piece.id === cleanId
    );
    const mirrorPiece = { ...ALL_PIECES[capturer][capturedPieceIndex] };

    capturedPiece = {
      ...mirrorPiece,
      team: capturer,
      id: newId
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

  handlePromotions = (piece, coordinates, promotion) => {
    const updatedPromotion = {
      ...promotion,
      demotion: { ...DEMOTIONS[promotion.id] },
      id: piece.id.includes('captured_')
        ? `captured_${promotion.id}`
        : promotion.id
    };

    this.removePiece(coordinates);
    this.placePiece(updatedPromotion, coordinates);
  };

  willPromotePiece = (piece, coordinates) => {
    const { row } = getSquareDetails(coordinates);
    const cleanId = piece.id.includes('captured_')
      ? piece.id.slice(9)
      : piece.id;

    const promotion = { ...PROMOTIONS[cleanId] };
    if (promotion.id) {
      if (
        (piece.team === WHITE && row >= BOARD_SIZE - 2) ||
        (piece.team === BLACK && row <= 3 && promotion)
      ) {
        this.handlePromotions(piece, coordinates, promotion);
      }
    }
  };

  onClickCaptured = event => {
    const { currentBoard, capturedPieces } = this.state;
    const {
      dataset: { team },
      id
    } = event.currentTarget;
    let movements = getFromBoard(currentBoard, EMPTY_SQUARES);
    const piece = capturedPieces[team].find(captured => captured.id === id);

    const squaresWithPawn = getFromBoard(
      currentBoard,
      COLUMNS_WITH_PAWNS,
      team
    );
    const lastRows = piece.team === WHITE ? ['9', '8'] : ['1', '2'];
    switch (piece.english) {
      case IS_PAWN:
        movements = movements.filter(coordinates => {
          return !squaresWithPawn.includes(coordinates.match(/\d$/)[0]);
        });
      // eslint-disable-next-line no-fallthrough
      case IS_LANCE:
        movements = movements.filter(
          coordinates => coordinates.match(/\d/)[0] !== lastRows[0]
        );
        break;
      case IS_KNIGHT:
        movements = movements.filter(
          coordinates =>
            coordinates.match(/\d/)[0] !== lastRows[0] &&
            coordinates.match(/\d/)[0] !== lastRows[1]
        );
        break;
      default:
        break;
    }
    this.selectPiece(piece, '0-0', movements);
  };

  dropPiece = (coordinates, piece = this.state.selectedPiece) => {
    const updatedCapturedPieces = this.state.capturedPieces[piece.team].filter(
      captured => captured.id !== piece.id
    );
    const { row, column } = getSquareDetails(coordinates);

    console.info(`${column}${NUMBERS[row]}${piece.shortName}`);

    this.setState(prevState => ({
      capturedPieces: {
        ...prevState.capturedPieces,
        [piece.team]: updatedCapturedPieces
      }
    }));
    this.placePiece(piece, coordinates);
  };

  calculateAllMovements = (piece, pieceCoordinates) => {
    const { row, column } = getSquareDetails(pieceCoordinates);
    const movements = [];
    let move;
    piece.moves.forEach(baseMovement => {
      if (
        baseMovement.x !== 0 &&
        baseMovement.y !== 0 &&
        (baseMovement.x === BOARD_SIZE ||
          baseMovement.x === -BOARD_SIZE ||
          baseMovement.y === BOARD_SIZE ||
          baseMovement.y === -BOARD_SIZE)
      ) {
        for (let n = 1; n <= BOARD_SIZE; n += 1) {
          const adjX = baseMovement.x > 0 ? n : -n;
          const adjY = baseMovement.y > 0 ? n : -n;

          move = { x: adjX + column, y: adjY + row };
          if (this.isMovementValid(move)) {
            const canMoveIntoSquare = this.canMoveIntoSquare(move, piece);
            if (canMoveIntoSquare) {
              movements.push(move);
              if (canMoveIntoSquare === ATTACK) {
                break;
              }
            } else {
              break;
            }
          }
        }
      } else if (
        baseMovement.x === BOARD_SIZE ||
        baseMovement.x === -BOARD_SIZE ||
        baseMovement.y === BOARD_SIZE ||
        baseMovement.y === -BOARD_SIZE
      ) {
        for (let n = 1; n <= BOARD_SIZE; n += 1) {
          let adjX;
          let adjY;

          if (baseMovement.x === 0) {
            adjX = 0;
          } else if (baseMovement.x > 0) {
            adjX = n;
          } else if (baseMovement.x < 0) {
            adjX = -n;
          }

          if (baseMovement.y === 0) {
            adjY = 0;
          } else if (baseMovement.y > 0) {
            adjY = n;
          } else if (baseMovement.y < 0) {
            adjY = -n;
          }

          move = { x: adjX + column, y: adjY + row };
          if (this.isMovementValid(move)) {
            const canMoveIntoSquare = this.canMoveIntoSquare(move, piece);
            if (canMoveIntoSquare) {
              movements.push(move);
              if (canMoveIntoSquare === ATTACK) {
                break;
              }
            } else {
              break;
            }
          }
        }
      } else {
        if (piece.team === WHITE) {
          move = { x: column + baseMovement.x, y: row + baseMovement.y };
        } else {
          move = { x: column - baseMovement.x, y: row - baseMovement.y };
        }
        if (this.isMovementValid(move)) {
          if (this.canMoveIntoSquare(move, piece)) {
            movements.push(move);
          }
        }
      }
    });
    return movements;
  };

  isMovementValid = move => {
    if (
      move.x > 0 &&
      move.x <= BOARD_SIZE &&
      move.y > 0 &&
      move.y <= BOARD_SIZE
    ) {
      return true;
    }
    return false;
  };

  canMoveIntoSquare = (square, piece) => {
    const { currentBoard } = this.state;

    if (currentBoard[square.y][square.x]) {
      if (currentBoard[square.y][square.x].team !== piece.team) {
        return ATTACK;
      }
      return false;
    }
    return PASS_THROUGH;
  };

  getColumnsWithoutPawns = () => {
    getFromBoard();
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
              team={WHITE}
              capturedPieces={capturedPieces.black}
              selectedPiece={selectedPiece}
              onClick={this.onClickCaptured}
            />
            <BoardComponent
              currentBoard={currentBoard}
              selectPiece={this.selectPiece}
              selectedPiece={selectedPiece}
              allowedMoves={allowedMoves}
              onClickSquare={this.onClickSquare}
              capturePiece={this.capturePiece}
              calculateAllMovements={this.calculateAllMovements}
            />
            <CapturedArea
              team={BLACK}
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

export default GameHandler;
