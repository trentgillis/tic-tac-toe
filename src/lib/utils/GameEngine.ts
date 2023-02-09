import { GameState } from '@/lib/types/GameState';
import { PlayerTypes, PlayerWinPossibilities } from '@/lib/types/PlayerTypes';
import { GameBoard } from '@/lib/types/GameBoard';

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
    const winner = this.determineWinner(updatedBoard);

    this.setGameState({
      ...this.gameState,
      winningPlayer: winner,
      currentPlayer: this.currentPlayer === 'x' ? 'o' : 'x',
      board: updatedBoard,
    });
  }

  determineWinner(board: GameBoard): PlayerWinPossibilities {
    if (this.horizontalWin(board) || this.verticalWin(board) || this.diagonalWin(board)) {
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

  private horizontalWin(board: GameBoard): boolean {
    for (const row of board) {
      if (row.every((value) => value === this.currentPlayer)) {
        return true;
      }
    }
    return false;
  }

  private verticalWin(board: GameBoard): boolean {
    return false;
  }

  private diagonalWin(board: GameBoard): boolean {
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
