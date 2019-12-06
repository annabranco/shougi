import React from 'react';
import { PropTypes } from 'prop-types';
import PieceHandler from '../../containers/PieceHandler';
import { BOARD_SIZE } from '../../settings/board';
import { Gameboard, Square } from './styles';
import { boardPropType, pieceDetailsPropTypes } from '../../core/interfaces';

const BoardComponent = ({
  currentBoard,
  onSelectPiece,
  selectedPiece,
  allowedMoves,
  onClickSquare,
  capturePiece
}) => (
  <Gameboard size={BOARD_SIZE}>
    {Object.entries(currentBoard)
      .reverse()
      .map(([y, row]) =>
        Object.keys(row).map(x => {
          const piece = currentBoard[y][x];
          return (
            <Square
              id={`${y}-${x}`}
              className="square"
              key={`${y}-${x}`}
              allowedMoves={allowedMoves}
              onClick={onClickSquare}
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
