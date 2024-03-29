import { shape, number, string, arrayOf } from 'prop-types';

const coordinatesPropType = shape({
  x: number.isRequired,
  y: number.isRequired
});

export const pieceDetailsPropType = shape({
  name: string.isRequired,
  shortName: string.isRequired,
  romaji: string.isRequired,
  english: string.isRequired,
  shortEnglish: string.isRequired,
  id: string.isRequired,
  moves: arrayOf(coordinatesPropType.isRequired).isRequired,
  promotion: shape({
    name: string.isRequired,
    shortName: string.isRequired,
    romaji: string.isRequired,
    english: string.isRequired,
    shortEnglish: string.isRequired,
    id: string.isRequired,
    moves: arrayOf(coordinatesPropType.isRequired).isRequired,
    demotion: shape({})
  }),
  demotion: shape({
    name: string.isRequired,
    shortName: string.isRequired,
    romaji: string.isRequired,
    english: string.isRequired,
    shortEnglish: string.isRequired,
    id: string.isRequired,
    moves: arrayOf(coordinatesPropType.isRequired).isRequired,
    promotion: shape({})
  })
});

// TODO: Review it

export const squareType = ({
  propValue,
  key,
  componentName,
  location,
  propFullName
}) =>
  new Error(
    `Invalid prop \`${propFullName}\` supplied to` +
      ` \`${componentName}\`. Validation failed.` +
      `propValue ${propValue}, key ${key}, location${location}`
  );

export const boardPropType = shape({
  1: squareType.isRequired
});
