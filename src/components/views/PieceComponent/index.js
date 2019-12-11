import React from 'react';
import { bool, func } from 'prop-types';
import { pieceDetailsPropType } from '../../../system/interfaces';
import { PieceFigure, PieceName } from './styles';

const PieceComponent = ({
  piece,
  onClick,
  selectedPiece,
  active,
  blackIsInCheck,
  whiteIsInCheck
}) => (
  <PieceFigure
    id={piece.id}
    data-team={piece.team}
    onClick={onClick}
    role="button"
    tabIndex={0}
    placeholder={window.innerWidth >= 900 ? piece.english : piece.shortEnglish}
    selectedPiece={selectedPiece}
    piece={piece}
    active={active}
    blackIsInCheck={blackIsInCheck}
    whiteIsInCheck={whiteIsInCheck}
  >
    <PieceName promoted={Boolean(piece.demotion)}>
      {window.innerWidth >= 900 ? piece.name : piece.shortName}
    </PieceName>
  </PieceFigure>
);

PieceComponent.propTypes = {
  piece: pieceDetailsPropType.isRequired,
  onClick: func.isRequired,
  selectedPiece: pieceDetailsPropType,
  active: bool.isRequired,
  blackIsInCheck: bool.isRequired,
  whiteIsInCheck: bool.isRequired
};

PieceComponent.defaultProps = {
  selectedPiece: undefined
};

export default PieceComponent;
