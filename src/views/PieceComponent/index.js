import React from 'react';
import { PropTypes } from 'prop-types';
import { PieceFigure, PieceName } from './styles';
import { pieceDetailsPropTypes } from '../../core/interfaces';

const PieceComponent = ({ piece, onClick, selectedPiece }) => (
  <PieceFigure
    onClick={onClick}
    role="button"
    tabIndex={0}
    placeholder={piece.english}
    selectedPiece={selectedPiece}
    piece={piece}
  >
    <PieceName promoted={piece.promoted}>
      {window.innerWidth > 700 ? piece.name : piece.shortName}
    </PieceName>
  </PieceFigure>
);

PieceComponent.propTypes = {
  piece: pieceDetailsPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedPiece: pieceDetailsPropTypes
};

PieceComponent.defaultProps = {
  selectedPiece: undefined
};

export default PieceComponent;
