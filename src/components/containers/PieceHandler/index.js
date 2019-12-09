import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import PieceComponent from '../../views/PieceComponent';
import { pieceDetailsPropTypes } from '../../../system/interfaces';

class PieceHandler extends PureComponent {
  static propTypes = {
    piece: pieceDetailsPropTypes.isRequired,
    selectPiece: PropTypes.func.isRequired,
    selectedPiece: pieceDetailsPropTypes,
    capturePiece: PropTypes.func.isRequired,
    allowedMoves: PropTypes.arrayOf(PropTypes.string).isRequired,
    calculateAllMovements: PropTypes.func.isRequired
  };

  static defaultProps = {
    selectedPiece: undefined
  };

  onClickPiece = event => {
    const {
      selectedPiece,
      allowedMoves,
      capturePiece,
      selectPiece,
      piece,
      calculateAllMovements
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
      const movements = calculateAllMovements(piece, pieceCoordinates);
      selectPiece(piece, pieceCoordinates, movements);
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
