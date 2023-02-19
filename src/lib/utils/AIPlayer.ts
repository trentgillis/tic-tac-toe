import { GameBoard } from '@/lib/types/GameBoard';
import { ValidTokens } from '@/lib/types/ValidTokens';
import { Board } from '@/lib/utils/Board';
import { Player } from '@/lib/utils/Player';

export class AIPlayer extends Player {
  readonly playerShortName: string = 'AI';

  constructor(token: ValidTokens, score: number = 0) {
    super(token, score);
  }

  getWinMessage(): string {
    return 'on no, you lost...';
  }

  getBestMove(board: Board): [number, number] {
    let bestMove: [number, number] = [-Infinity, -Infinity];
    let bestScore = -Infinity;

    for (const [row, rowValues] of board.board.entries()) {
      for (const [col] of rowValues.entries()) {
        if (board.board[row][col] === null) {
          board.placeMark(row, col, this);
          const currPositionScore = this.minimax(board.board);

          if (currPositionScore > bestScore) {
            bestScore = currPositionScore;
            bestMove = [row, col];
          }
        }
      }
    }

    return bestMove;
  }

  minimax(boardCells: GameBoard): number {
    // TODO: NOOP
    return 1;
  }

  evaluate() {
    // TODO: NOOP
  }
}
