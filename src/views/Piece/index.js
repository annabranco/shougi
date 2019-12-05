import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './styles.css';

class Piece extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  state = {
    selected: false,
    promoted: false
  };

  onClickPiece = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  render() {
    return (
      <div
        className={`piece ${this.state.selected ? 'active' : ''}`}
        onClick={this.onClickPiece}
        role="button"
        tabIndex={0}
      >
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default Piece;
