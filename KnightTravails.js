export function getMoves([x, y]) {
  const offsets = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  return offsets
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
}

function knightMoves(start, end) {
  if (start.toString() === end.toString) {
    console.log("Knight is in the same place");
    return;
  }

  const queue = [[start]];
  const visited = [start.toString()];
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === end[0] && current[1] === current[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your Path:`);
      path.forEach((square) => console.log(`[${square[0]}, ${square[1]}]`));
      return path;
    }

    const moves = getMoves(current);
    for (const move of moves) {
      if (!visited.includes(move.toString())) {
        visited.push(move.toString);
        queue.push([...path, move]);
      }
    }
  }
}
