import { PropTypes } from 'prop-types';

export const coordinatesPropTypes = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
});

export const pieceDetailsPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  romaji: PropTypes.string.isRequired,
  english: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  moves: PropTypes.arrayOf(coordinatesPropTypes.isRequired).isRequired,
  promoted: PropTypes.bool,
  promotion: PropTypes.shape({
    name: PropTypes.string.isRequired,
    romaji: PropTypes.string.isRequired,
    english: PropTypes.string.isRequired,
    moves: PropTypes.arrayOf(coordinatesPropTypes.isRequired).isRequired
  })
});

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

export const squarePropType = (
  propValue,
  key,
  componentName,
  location,
  propFullName
) => {
  console.log(
    `Invalid prop \`${propFullName}\` supplied to` +
      ` \`${componentName}\`. Validation failed.` +
      `propValue ${propValue}, key ${key}, location${location}`
  );
  return new Error(
    `Invalid prop \`${propFullName}\` supplied to` +
      ` \`${componentName}\`. Validation failed.` +
      `propValue ${propValue}, key ${key}, location${location}`
  );
};

export const boardPropType = PropTypes.shape({
  1: squarePropType.isRequired
});
