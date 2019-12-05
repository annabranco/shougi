import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { getSquareDetails } from '../../utils';
import { PieceName, Piece } from './styles';
import { pieceDetailsPropTypes } from '../../core/interfaces';

class PieceComponent extends PureComponent {
  static propTypes = {
    piece: pieceDetailsPropTypes.isRequired,
    onSelectPiece: PropTypes.func.isRequired,
    selectedPiece: pieceDetailsPropTypes
  };

  static defaultProps = {
    selectedPiece: undefined
  };

  state = {
    square: undefined,
    selected: false,
    promoted: false
  };

  onClickPiece = event => {
    const square = event.currentTarget.parentElement.id;
    const { row, column } = getSquareDetails(square);
    const movements = [];

    this.setState(prevState => ({
      selected: !prevState.selected,
      square
    }));
    this.props.piece.moves.forEach(baseMovement => {
      const move = { x: baseMovement.x + column, y: baseMovement.y + row };
      movements.push(move);
    });
    this.props.onSelectPiece(this.props.piece, movements);
  };

  updateLocation = square => this.setState({ square });

  render() {
    console.log('$$$ this.props.piece', this.props);
    return (
      <Piece onClick={this.onClickPiece} role="button" tabIndex={0}>
        <PieceName>{this.props.piece.name}</PieceName>
      </Piece>
    );
  }
}

export default PieceComponent;
