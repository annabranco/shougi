import React from 'react';
import { PropTypes } from 'prop-types';
import { pieceDetailsPropType } from '../../../system/interfaces';
import { PieceFigure, PieceName } from './styles';

const PieceComponent = ({ piece, onClick, selectedPiece }) => (
  <PieceFigure
    id={piece.id}
    data-team={piece.team}
    onClick={onClick}
    role="button"
    tabIndex={0}
    placeholder={window.innerWidth >= 900 ? piece.english : piece.shortEnglish}
    selectedPiece={selectedPiece}
    piece={piece}
  >
    <PieceName promoted={Boolean(piece.demotion)}>
      {window.innerWidth >= 900 ? piece.name : piece.shortName}
    </PieceName>
  </PieceFigure>
);

PieceComponent.propTypes = {
  piece: pieceDetailsPropType.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedPiece: pieceDetailsPropType
};

PieceComponent.defaultProps = {
  selectedPiece: undefined
};

export default PieceComponent;
