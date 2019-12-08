import React from 'react';
import { PropTypes } from 'prop-types';
import PieceHandler from '../../containers/PieceHandler';
import { BOARD_SIZE } from '../../../system/setup/board';
import {
  boardPropType,
  pieceDetailsPropTypes
} from '../../../system/interfaces';
import { Gameboard, Square, BoardArea, Author } from './styles';

const BoardComponent = ({
  currentBoard,
  onSelectPiece,
  selectedPiece,
  allowedMoves,
  onClickSquare,
  capturePiece
}) => (
  <BoardArea>
    <Author>アッナブランコ</Author>
    <Gameboard size={BOARD_SIZE}>
      {Object.entries(currentBoard)
        .reverse()
        .map(([y, row]) =>
          Object.keys(row).map(x => {
            const piece = currentBoard[y][x];
            return (
              <Square
                id={`${y}-${x}`}
                key={`${y}-${x}`}
                allowedMoves={allowedMoves}
                onClick={onClickSquare}
                pieceOnSquare={piece}
                attackingPiece={selectedPiece}
              >
                {currentBoard[y][x] && (
                  <PieceHandler
                    piece={piece}
                    onSelectPiece={onSelectPiece}
                    selectedPiece={selectedPiece}
                    capturePiece={capturePiece}
                    allowedMoves={allowedMoves}
                    currentBoard={currentBoard}
                  />
                )}
              </Square>
            );
          })
        )}
    </Gameboard>
  </BoardArea>
);

BoardComponent.propTypes = {
  currentBoard: boardPropType.isRequired,
  onSelectPiece: PropTypes.func.isRequired,
  selectedPiece: pieceDetailsPropTypes,
  allowedMoves: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickSquare: PropTypes.func.isRequired,
  capturePiece: PropTypes.func.isRequired
};

BoardComponent.defaultProps = {
  selectedPiece: undefined
};

export default BoardComponent;
