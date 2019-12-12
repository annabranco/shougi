import React from 'react';
import { string, bool, func, arrayOf } from 'prop-types';
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
  calculateAllMovements,
  player,
  testingMode,
  blackIsInCheck,
  whiteIsInCheck
}) => (
  <BoardArea>
    <Author>アッナブランコ</Author>
    <Gameboard size={BOARD_SIZE}>
      {Object.entries(currentBoard).map(([x, columns]) =>
        Object.keys
          .a(columns)
          .reverse()
          .map(y => {
            const piece = currentBoard[x][y];
            return (
              <Square
                id={`${x}-${y}`}
                key={`${x}-${y}`}
                allowedMoves={allowedMoves}
                onClick={onClickSquare}
                pieceOnSquare={piece}
                attackingPiece={selectedPiece}
              >
                {currentBoard[x][y] && (
                  <PieceHandler
                    piece={piece}
                    selectPiece={selectPiece}
                    selectedPiece={selectedPiece}
                    capturePiece={capturePiece}
                    allowedMoves={allowedMoves}
                    calculateAllMovements={calculateAllMovements}
                    active={player === piece.team || testingMode}
                    blackIsInCheck={blackIsInCheck}
                    whiteIsInCheck={whiteIsInCheck}
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
  selectPiece: func.isRequired,
  selectedPiece: pieceDetailsPropType,
  allowedMoves: arrayOf(string).isRequired,
  onClickSquare: func.isRequired,
  capturePiece: func.isRequired,
  calculateAllMovements: func.isRequired,
  player: string.isRequired,
  testingMode: bool.isRequired,
  blackIsInCheck: bool.isRequired,
  whiteIsInCheck: bool.isRequired
};

BoardComponent.defaultProps = {
  selectedPiece: undefined
};

export default BoardComponent;
