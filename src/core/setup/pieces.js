import React from 'react';
import Piece from '../../views/Piece';
import { OUSHOU, KYOUSHA, NARIKYOU, TOKIN, FUHYOU } from '../../database';

export const KING = <Piece type={OUSHOU} />;
export const PAWN = <Piece type={FUHYOU} />;
export const PROMOTED_PAWN = <Piece type={TOKIN} />;
export const LANCE = <Piece type={KYOUSHA} />;
export const PROMOTED_LANCE = <Piece type={NARIKYOU} />;

// TODO DELETE
