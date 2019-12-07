import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { GameArea } from './styles';

class MainArea extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static defaultProps = {
    children: undefined
  };

  state = {};

  render() {
    return <GameArea>{this.props.children}</GameArea>;
  }
}

export default MainArea;
