import React from 'react';
import { PropTypes } from 'prop-types';
import PieceHandler from '../../containers/PieceHandler';
import { BOARD_SIZE } from '../../../system/setup/board';
import {
  boardPropType,
  pieceDetailsPropType
} from '../../../system/interfaces';
import { Gameboard, Square, BoardArea, Author } from './styles';

const BoardComponent = ({
  currentBoard,
  selectPiece,
  selectedPiece,
  allowedMoves,
  onClickSquare,
  capturePiece,
  calculateAllMovements
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
                    selectPiece={selectPiece}
                    selectedPiece={selectedPiece}
                    capturePiece={capturePiece}
                    allowedMoves={allowedMoves}
                    calculateAllMovements={calculateAllMovements}
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
  selectPiece: PropTypes.func.isRequired,
  selectedPiece: pieceDetailsPropType,
  allowedMoves: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickSquare: PropTypes.func.isRequired,
  capturePiece: PropTypes.func.isRequired,
  calculateAllMovements: PropTypes.func.isRequired
};

BoardComponent.defaultProps = {
  selectedPiece: undefined
};

export default BoardComponent;
