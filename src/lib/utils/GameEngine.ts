import { GameState } from '@/lib/types/GameState';
import { PlayerWinPossibilities } from '@/lib/types/PlayerTypes';
import { GameBoard } from '@/lib/types/GameBoard';
import { ValidTokens } from '@/lib/types/ValidTokens';
import { HumanPlayer } from './HumanPlayer';
import { AIPlayer } from './AIPlayer';

export class GameEngine {
  private gameState: GameState;
  private setGameState: React.Dispatch<React.SetStateAction<GameState>>;

  constructor(gameState: GameState, setGameState: React.Dispatch<React.SetStateAction<GameState>>) {
    this.setGameState = setGameState;
    this.gameState = gameState;
  }

  get winner() {
    return this.gameState.winner;
  }

  get currentPlayer() {
    if (!this.gameState.currentPlayer) {
      throw new Error('GameState Error: Current player is undefined.');
    }

    return this.gameState.currentPlayer;
  }

  get gameInProgress() {
    return this.gameState.inProgress;
  }

  get board() {
    return this.gameState.board;
  }

  get playerScores() {
    return {
      x: this.gameState.playerX?.score,
      o: this.gameState.playerO?.score,
      d: this.gameState.draws,
    };
  }

  updateGameState() {
    this.setGameState(this.gameState);
  }

  startHumanGame() {
    const playerX = new HumanPlayer('x', 0, 'Player 1');
    const playerO = new HumanPlayer('o', 0, 'Player 2');

    this.setGameState({
      ...this.gameState,
      inProgress: true,
      currentPlayer: playerX,
      winner: null,
      playerX,
      playerO,
      draws: 0,
    });
  }

  startAIGame(selectedToken: ValidTokens) {
    let playerX = null;
    let playerO = null;
    if (selectedToken === 'x') {
      playerX = new HumanPlayer('x', 0);
      playerO = new AIPlayer('o', 0);
    } else {
      playerX = new AIPlayer('x', 0);
      playerO = new HumanPlayer('o', 0);
    }

    this.setGameState({
      ...this.gameState,
      inProgress: true,
      currentPlayer: playerX,
      winner: null,
      playerX,
      playerO,
      draws: 0,
    });
  }

  playerTurn(row: number, col: number) {
    if (!this.currentPlayer) {
      throw new Error('Game is in invalid state. Cannot perform player move.');
    }

    const updatedBoard: GameBoard = this.gameState.board;
    this.gameState.board[row][col] = this.currentPlayer.token;
    const winner = this.determineWinner(updatedBoard, row, col);

    if (winner) {
      this.updateScore(winner.token);
    } else if (this.boardFull(updatedBoard)) {
      this.updateScore('d');
    }

    this.gameState = {
      ...this.gameState,
      winner,
      currentPlayer:
        this.currentPlayer.token === 'x' ? this.gameState.playerO : this.gameState.playerX,
      board: updatedBoard,
    };
    this.updateGameState();
  }

  determineWinner(board: GameBoard, row: number, col: number): HumanPlayer | AIPlayer | null {
    if (this.horizontalWin(board, row) || this.verticalWin(board, col) || this.diagonalWin(board)) {
      return this.currentPlayer;
    }

    return null;
  }

  clearBoard() {
    const emptyBoard: GameBoard = Array(3)
      .fill(null)
      .map(() => [null, null, null]);
    this.gameState.board = emptyBoard;
    this.updateGameState();
  }

  private horizontalWin(board: GameBoard, row: number): boolean {
    return board[row].every((value) => value === this.currentPlayer.token);
  }

  private verticalWin(board: GameBoard, col: number): boolean {
    return board
      .reduce((acc, _, row) => [...acc, board[row][col]], [] as (ValidTokens | null)[])
      .every((colToken) => this.currentPlayer.token === colToken);
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

      if (diagonalValues.every((diagonalValue) => this.currentPlayer.token === diagonalValue)) {
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

  private updateScore(winner: PlayerWinPossibilities) {
    if (!this.gameState.playerX || !this.gameState.playerO) {
      throw new Error('Game state is null, cannot perform method updateScore.');
    }

    if (winner === 'x') {
      this.gameState.playerX.score += 1;
      this.setGameState(this.gameState);
    } else if (winner === 'o') {
      this.gameState.playerO.score += 1;
      this.setGameState(this.gameState);
    } else if (winner === 'd') {
      this.gameState.draws += 1;
      this.setGameState(this.gameState);
    }
  }
}
