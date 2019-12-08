import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import PieceComponent from '../../views/PieceComponent';
import { BOARD_SIZE } from '../../../system/setup';
import { getSquareDetails, getFromBoard } from '../../../system/utils';
import {
  pieceDetailsPropTypes,
  boardPropType
} from '../../../system/interfaces';
import {
  ATTACK,
  PASS_THROUGH,
  WHITE,
  EMPTY_SQUARES
} from '../../../system/constants';

class PieceHandler extends PureComponent {
  static propTypes = {
    piece: pieceDetailsPropTypes.isRequired,
    onSelectPiece: PropTypes.func.isRequired,
    selectedPiece: pieceDetailsPropTypes,
    capturePiece: PropTypes.func.isRequired,
    allowedMoves: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentBoard: boardPropType.isRequired
  };

  static defaultProps = {
    selectedPiece: undefined
  };

  calculateAllMovements = pieceCoordinates => {
    const { piece } = this.props;
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
            const canMoveIntoSquare = this.canMoveIntoSquare(move);
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
            const canMoveIntoSquare = this.canMoveIntoSquare(move);
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
          if (this.canMoveIntoSquare(move)) {
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

  canMoveIntoSquare = square => {
    if (this.props.currentBoard[square.y][square.x]) {
      if (
        this.props.currentBoard[square.y][square.x].team !==
        this.props.piece.team
      ) {
        return ATTACK;
      }
      return false;
    }
    return PASS_THROUGH;
  };

  onClickPiece = event => {
    const {
      selectedPiece,
      allowedMoves,
      capturePiece,
      onSelectPiece,
      piece
    } = this.props;
    const pieceCoordinates = event.currentTarget.parentElement.id;

    event.stopPropagation();

    if (
      selectedPiece &&
      selectedPiece.id !== piece.id &&
      allowedMoves.includes(pieceCoordinates) &&
      selectedPiece.team !== piece.team
    ) {
      capturePiece(pieceCoordinates, selectedPiece.team);
    } else {
      const movements = this.calculateAllMovements(pieceCoordinates);
      onSelectPiece(piece, pieceCoordinates, movements);
    }
  };

  render() {
    return (
      <PieceComponent
        piece={this.props.piece}
        onClick={this.onClickPiece}
        selectedPiece={this.props.selectedPiece}
      />
    );
  }
}

export default PieceHandler;
