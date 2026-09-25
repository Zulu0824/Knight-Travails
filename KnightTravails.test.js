import { knightMoves } from "./KnightTravails.js";
import { getMoves } from "./KnightTravails.js";

describe("knightMoves", () => {
  test("returns a path that starts at the start square", () => {
    const path = knightMoves([0, 0], [1, 2]);
    expect(path[0]).toEqual([0, 0]);
  });

  test("returns a path that ends at the end square", () => {
    const path = knightMoves([0, 0], [1, 2]);
    expect(path[path.length - 1]).toEqual([1, 2]);
  });

  test("finds a one-move path when start and end are a knight move apart", () => {
    const path = knightMoves([0, 0], [1, 2]);
    expect(path).toHaveLength(2);
  });

  test("finds the known shortest path length from corner to corner", () => {
    const path = knightMoves([0, 0], [7, 7]);
    expect(path.length - 1).toBe(6);
  });

  test("every step in the path is a legal knight move", () => {
    const path = knightMoves([3, 3], [6, 6]);
    for (let i = 1; i < path.length; i++) {
      const [px, py] = path[i - 1];
      const [cx, cy] = path[i];
      const dx = Math.abs(cx - px);
      const dy = Math.abs(cy - py);
      expect([dx, dy].sort()).toEqual([1, 2]);
    }
  });

  test("returns a single-square path when start equals end", () => {
    const path = knightMoves([4, 4], [4, 4]);
    expect(path).toEqual([[4, 4]]);
  });
});

test("returns the exact path for a one-move case (single shortest path)", () => {
  const path = knightMoves([0, 0], [1, 2]);
  expect(path).toEqual([
    [0, 0],
    [1, 2],
  ]);
});
