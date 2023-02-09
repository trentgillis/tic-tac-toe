import { GameState } from '@/lib/types/GameState';
import { PlayerTypes, PlayerWinPossibilities } from '@/lib/types/PlayerTypes';
import { GameBoard } from '@/lib/types/GameBoard';
import { ValidTokens } from '@/lib/types/ValidTokens';

export class GameEngine {
  private gameState: GameState;
  private setGameState: React.Dispatch<React.SetStateAction<GameState>>;

  constructor(gameState: GameState, setGameState: React.Dispatch<React.SetStateAction<GameState>>) {
    this.setGameState = setGameState;
    this.gameState = gameState;
  }

  get winningPlayer() {
    return this.gameState.winningPlayer;
  }

  get currentPlayer() {
    return this.gameState.currentPlayer;
  }

  get currentPlayerType() {
    if (this.currentPlayer === 'x') {
      return this.gameState.playerX?.type;
    } else {
      return this.gameState.playerO?.type;
    }
  }

  get gameStarted() {
    return this.gameState.gameStarted;
  }

  get board() {
    return this.gameState.board;
  }

  startGame(playerXType: PlayerTypes, playerOType: PlayerTypes) {
    this.setGameState({
      ...this.gameState,
      gameStarted: true,
      playerX: {
        token: 'x',
        type: playerXType,
      },
      playerO: {
        token: 'o',
        type: playerOType,
      },
    });
  }

  playerTurn(row: number, col: number) {
    const updatedBoard: GameBoard = this.gameState.board;
    this.gameState.board[row][col] = this.currentPlayer;
    const winner = this.determineWinner(updatedBoard, row, col);

    this.setGameState({
      ...this.gameState,
      winningPlayer: winner,
      currentPlayer: this.currentPlayer === 'x' ? 'o' : 'x',
      board: updatedBoard,
    });
  }

  determineWinner(board: GameBoard, row: number, col: number): PlayerWinPossibilities {
    if (this.horizontalWin(board, row) || this.verticalWin(board, col) || this.diagonalWin(board)) {
      return this.currentPlayer;
    }

    if (this.boardFull(board)) {
      return 'd';
    }

    return null;
  }

  clearBoard() {
    this.setGameState({
      ...this.gameState,
      currentPlayer: 'x',
      winningPlayer: null,
      board: Array(3)
        .fill(null)
        .map(() => [null, null, null]),
    });
  }

  private horizontalWin(board: GameBoard, row: number): boolean {
    return board[row].every((value) => value === this.currentPlayer);
  }

  private verticalWin(board: GameBoard, col: number): boolean {
    return board
      .reduce((acc, _, row) => [...acc, board[row][col]], [] as (ValidTokens | null)[])
      .every((colToken) => this.currentPlayer === colToken);
  }

  private diagonalWin(board: GameBoard): boolean {
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
        (acc, currentDiagonal) => [...acc, board[currentDiagonal[0]][currentDiagonal[1]]],
        [] as (ValidTokens | null)[]
      );

      if (diagonalValues.every((diagonalValue) => this.currentPlayer === diagonalValue)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Used to check if the board is full. This will be used to handle the case where the game has ended in a draw
   */
  private boardFull(board: GameBoard): boolean {
    for (const row of board) {
      if (row.some((value) => value === null)) {
        return false;
      }
    }

    return true;
  }
}
