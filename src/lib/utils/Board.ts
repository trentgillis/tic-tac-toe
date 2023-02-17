import { GameBoard } from '@/lib/types/GameBoard';
import { ValidTokens } from '@/lib/types/ValidTokens';
import { AIPlayer } from '@/lib/utils/AIPlayer';
import { HumanPlayer } from '@/lib/utils/HumanPlayer';

export class Board {
  board: GameBoard;

  constructor() {
    this.board = Array(3)
      .fill(null)
      .map(() => [null, null, null]);
  }

  placeMark(row: number, col: number, player: HumanPlayer | AIPlayer): void {
    this.board[row][col] = player.token;
  }

  winningPositions(row: number, col: number, player: HumanPlayer | AIPlayer): number[][] | null {
    const winningPositions = [
      ...this.horizontalWin(row, player),
      ...this.verticalWin(col, player),
      ...this.diagonalWin(player),
    ];

    if (winningPositions.length > 0) return winningPositions;
    else return null;
  }

  horizontalWin(row: number, player: HumanPlayer | AIPlayer): number[][] {
    if (this.board[row].every((value) => value === player.token)) {
      return this.board[row].map((_, col) => [row, col]);
    }

    return [];
  }

  verticalWin(col: number, player: HumanPlayer | AIPlayer): number[][] {
    const isVerticalWin = this.board
      .reduce((acc, _, row) => [...acc, this.board[row][col]], [] as (ValidTokens | null)[])
      .every((colToken) => player.token === colToken);

    if (isVerticalWin) {
      return this.board.reduce((acc, _, row) => [...acc, [row, col]], [] as number[][]);
    }

    return [];
  }

  diagonalWin(player: HumanPlayer | AIPlayer): number[][] {
    const diagonals = [
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const diagonal of diagonals) {
      const diagonalValues = diagonal.reduce(
        (acc, currentDiagonal) => [...acc, this.board[currentDiagonal[0]][currentDiagonal[1]]],
        [] as (ValidTokens | null)[]
      );

      if (diagonalValues.every((diagonalValue) => player.token === diagonalValue)) {
        return diagonal;
      }
    }

    return [];
  }

  isBoardFull(): boolean {
    for (const row of this.board) {
      if (row.some((value) => value === null)) {
        return false;
      }
    }

    return true;
  }
}
