export const getSquareDetails = square => {
  let [row, column] = square.split(/-/);
  row = Number(row);
  column = Number(column);

  return { row, column };
};

export const getSquareId = square => `${square.y}-${square.x}`;
