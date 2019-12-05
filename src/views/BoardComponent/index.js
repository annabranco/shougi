import React from 'react';
import { PropTypes } from 'prop-types';
import PieceHandler from '../../containers/PieceHandler';
import { BOARD_SIZE } from '../../core/setup/board';
import { Gameboard, Square } from './styles';
import {
  boardPropType,
  pieceDetailsPropTypes,
  coordinatesPropTypes
} from '../../core/interfaces';

const BoardComponent = ({
  currentBoard,
  onSelectPiece,
  selectedPiece,
  allowedMoves,
  onClickSquare
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
  allowedMoves: PropTypes.arrayOf(coordinatesPropTypes).isRequired,
  onClickSquare: PropTypes.func.isRequired
};

BoardComponent.defaultProps = {
  selectedPiece: undefined
};

export default BoardComponent;
