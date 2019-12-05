import React from 'react';
import { PropTypes } from 'prop-types';
import { PieceFigure, PieceName } from './styles';
import { pieceDetailsPropTypes } from '../../core/interfaces';

const PieceComponent = ({ piece, onClick, selected, selectedPiece }) => (
  <PieceFigure
    onClick={onClick}
    role="button"
    tabIndex={0}
    selected={selected}
    placeholder={piece.english}
    selectedPiece={selectedPiece}
    piece={piece}
  >
    <PieceName promoted={piece.promoted}>{piece.name}</PieceName>
  </PieceFigure>
);

PieceComponent.propTypes = {
  piece: pieceDetailsPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  selectedPiece: pieceDetailsPropTypes
};

PieceComponent.defaultProps = {
  selectedPiece: undefined
};

export default PieceComponent;
