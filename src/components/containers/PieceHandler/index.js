import React, { PureComponent } from 'react';
import { bool, func, arrayOf, string } from 'prop-types';
import PieceComponent from '../../views/PieceComponent';
import { pieceDetailsPropType } from '../../../system/interfaces';

class PieceHandler extends PureComponent {
  static propTypes = {
    piece: pieceDetailsPropType.isRequired,
    selectPiece: func.isRequired,
    selectedPiece: pieceDetailsPropType,
    capturePiece: func.isRequired,
    allowedMoves: arrayOf(string).isRequired,
    calculateAllMovements: func.isRequired,
    active: bool.isRequired,
    blackIsInCheck: bool.isRequired,
    whiteIsInCheck: bool.isRequired
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
      calculateAllMovements,
      active
    } = this.props;
    const pieceCoordinates = event.currentTarget.parentElement.id;
    debugger;
    event.stopPropagation();
    if (
      selectedPiece &&
      selectedPiece.id !== piece.id &&
      allowedMoves.includes(pieceCoordinates) &&
      selectedPiece.team !== piece.team
    ) {
      capturePiece(pieceCoordinates, selectedPiece.team);
    } else if (active) {
      const movements = calculateAllMovements(piece, pieceCoordinates);
      selectPiece(piece, pieceCoordinates, movements);
    }
  };

  render() {
    const {
      selectedPiece,
      piece,
      active,
      blackIsInCheck,
      whiteIsInCheck
    } = this.props;
    return (
      <PieceComponent
        piece={piece}
        onClick={this.onClickPiece}
        selectedPiece={selectedPiece}
        active={active}
        blackIsInCheck={blackIsInCheck}
        whiteIsInCheck={whiteIsInCheck}
      />
    );
  }
}

export default PieceHandler;
