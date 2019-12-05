import { PropTypes } from 'prop-types';

const squarePropType = PropTypes.shape({
  1: PropTypes.node,
  2: PropTypes.node,
  3: PropTypes.node
});

export const boardPropType = PropTypes.shape({
  1: squarePropType.isRequired,
  2: squarePropType.isRequired,
  3: squarePropType.isRequired
});
