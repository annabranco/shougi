import React from 'react';
import { PropTypes } from 'prop-types';
import { pieceDetailsPropType } from '../../../system/interfaces';
import {
  CapturedPiecesWrapper,
  CapturedGrid,
  CapturedSquare,
  CapturedText
} from './styles';
import PieceComponent from '../PieceComponent';

const CapturedArea = ({ team, capturedPieces, selectedPiece, onClick }) => (
  <CapturedPiecesWrapper team={team}>
    <CapturedText team={team}>持ち駒</CapturedText>
    <CapturedGrid>
      {capturedPieces.map(piece => (
        <CapturedSquare key={piece.id}>
          <PieceComponent
            piece={piece}
            onClick={onClick}
            selectedPiece={selectedPiece}
          />
        </CapturedSquare>
      ))}
    </CapturedGrid>
  </CapturedPiecesWrapper>
);

CapturedArea.propTypes = {
  team: PropTypes.string,
  capturedPieces: PropTypes.arrayOf(pieceDetailsPropType).isRequired,
  selectedPiece: pieceDetailsPropType,
  onClick: PropTypes.func.isRequired
};

CapturedArea.defaultProps = {
  team: undefined,
  selectedPiece: undefined
};

export default CapturedArea;
