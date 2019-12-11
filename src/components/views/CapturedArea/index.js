import React from 'react';
import { string, arrayOf, func, bool } from 'prop-types';
import { pieceDetailsPropType } from '../../../system/interfaces';
import {
  CapturedPiecesWrapper,
  CapturedGrid,
  CapturedSquare,
  CapturedText
} from './styles';
import PieceComponent from '../PieceComponent';

const CapturedArea = ({
  team,
  capturedPieces,
  selectedPiece,
  onClick,
  active
}) => (
  <CapturedPiecesWrapper team={team}>
    <CapturedText team={team}>持ち駒</CapturedText>
    <CapturedGrid>
      {capturedPieces.map(piece => (
        <CapturedSquare key={piece.id}>
          <PieceComponent
            piece={piece}
            onClick={active ? onClick : () => null}
            selectedPiece={selectedPiece}
            active={active}
          />
        </CapturedSquare>
      ))}
    </CapturedGrid>
  </CapturedPiecesWrapper>
);

CapturedArea.propTypes = {
  team: string,
  capturedPieces: arrayOf(pieceDetailsPropType).isRequired,
  selectedPiece: pieceDetailsPropType,
  onClick: func.isRequired,
  active: bool.isRequired
};

CapturedArea.defaultProps = {
  team: undefined,
  selectedPiece: undefined
};

export default CapturedArea;
