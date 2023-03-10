import { ValidTokens } from '@/lib/types/ValidTokens';
import { Board } from '@/lib/utils/Board';
import { Player } from '@/lib/utils/Player';

export class AIPlayer extends Player {
  constructor(token: ValidTokens, score: number = 0) {
    const playerName = 'AI';
    const playerShortName = 'AI';
    const winMessage = 'oh no, you lost...';

    super(token, score, playerName, playerShortName, winMessage);
  }

  getBestMove(board: Board, opponentToken: ValidTokens): [number, number] {
    let bestMove: [number, number] = [-1, -1];
    let bestScore = -Infinity;

    if (board.boardCells.flat().every((val) => val === null)) {
      return [0, 0];
    }

    for (const [row, rowValues] of board.boardCells.entries()) {
      for (const [col] of rowValues.entries()) {
        if (board.boardCells[row][col] === null) {
          board.placeToken(row, col, this.token);
          const currPositionScore = this.minimax(board, opponentToken, false);
          board.removeToken(row, col);

          if (currPositionScore > bestScore) {
            bestScore = currPositionScore;
            bestMove = [row, col];
          }
        }
      }
    }

    return bestMove;
  }

  minimax(board: Board, opponentToken: ValidTokens, isMaximizing: boolean): number {
    if (board.hasDraw) return 0;
    else if (board.hasWin && board.winningToken === this.token) return 1;
    else if (board.hasWin && board.winningToken !== this.token) return -1;

    if (isMaximizing) {
      let maxScore = -Infinity;

      for (const [row, rowVal] of board.boardCells.entries()) {
        for (const [col] of rowVal.entries()) {
          if (board.boardCells[row][col] === null) {
            board.placeToken(row, col, this.token);
            const currPositionScore = this.minimax(board, opponentToken, false);
            board.removeToken(row, col);

            maxScore = Math.max(maxScore, currPositionScore);
          }
        }
      }

      return maxScore;
    } else {
      let minScore = Infinity;

      for (const [row, rowVal] of board.boardCells.entries()) {
        for (const [col] of rowVal.entries()) {
          if (board.boardCells[row][col] === null) {
            board.placeToken(row, col, opponentToken);
            const currPositionScore = this.minimax(board, opponentToken, true);
            board.removeToken(row, col);

            minScore = Math.min(minScore, currPositionScore);
          }
        }
      }

      return minScore;
    }
  }
}
