import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { getSquareDetails } from '../../utils';
import { pieceDetailsPropTypes } from '../../core/interfaces';
import PieceComponent from '../../views/PieceComponent';
import { BOARD_SIZE } from '../../core/setup/board';

class PieceHandler extends PureComponent {
  static propTypes = {
    piece: pieceDetailsPropTypes.isRequired,
    onSelectPiece: PropTypes.func.isRequired,
    selectedPiece: pieceDetailsPropTypes
  };

  static defaultProps = {
    selectedPiece: undefined
  };

  calculateAllMovements = pieceCoordinates => {
    const { row, column } = getSquareDetails(pieceCoordinates);
    const movements = [];
    this.props.piece.moves.forEach(baseMovement => {
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
          movements.push(move);
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
          movements.push(move);
        }
      } else {
        const move = { x: baseMovement.x + column, y: baseMovement.y + row };
        movements.push(move);
      }
    });
    return movements;
  };

  onClickPiece = event => {
    event.stopPropagation();
    const pieceCoordinates = event.currentTarget.parentElement.id;
    const movements = this.calculateAllMovements(pieceCoordinates);
    this.props.onSelectPiece(this.props.piece, pieceCoordinates, movements);
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
