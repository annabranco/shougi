import React from 'react';
import { boardPropType } from '../../core/interfaces';
import './styles.css';

const Board = ({ state }) => {
  return (
    <section id="board">
      <div id="3-3" className="square">
        {state[3][3]}
      </div>
      <div id="3-2" className="square">
        {state[3][2]}
      </div>
      <div id="3-1" className="square">
        {state[3][1]}
      </div>
      <div id="2-3" className="square">
        {state[2][3]}
      </div>
      <div id="2-2" className="square">
        {state[2][2]}
      </div>
      <div id="2-1" className="square">
        {state[2][1]}
      </div>
      <div id="1-3" className="square">
        {state[1][3]}
      </div>
      <div id="1-2" className="square">
        {state[1][2]}
      </div>
      <div id="1-1" className="square">
        {state[1][1]}
      </div>
    </section>
  );
};

Board.propTypes = {
  state: boardPropType.isRequired
};

export default Board;
