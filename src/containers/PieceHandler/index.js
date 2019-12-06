import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { getSquareDetails } from '../../utils';
import { pieceDetailsPropTypes, boardPropType } from '../../core/interfaces';
import PieceComponent from '../../views/PieceComponent';
import { BOARD_SIZE } from '../../settings/board';

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

          const move = { x: adjX + column, y: adjY + row };
          if (this.isMovementValid(move)) {
            if (this.canSquareBeAttacked(move)) {
              movements.push(move);
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

          const move = { x: adjX + column, y: adjY + row };
          if (this.isMovementValid(move)) {
            if (this.canSquareBeAttacked(move)) {
              movements.push(move);
            } else {
              break;
            }
          }
        }
      } else {
        const move = { x: baseMovement.x + column, y: baseMovement.y + row };
        if (this.isMovementValid(move)) {
          if (this.canSquareBeAttacked(move)) {
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

  canSquareBeAttacked = square => {
    if (this.props.currentBoard[square.y][square.x]) {
      if (
        this.props.currentBoard[square.y][square.x].team !==
        this.props.piece.team
      ) {
        return true;
      }
      return false;
    }
    return true;
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
      capturePiece(pieceCoordinates);
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
