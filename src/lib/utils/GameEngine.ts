import { GameState } from '@/lib/types/GameState';
import { PlayerWinPossibilities } from '@/lib/types/PlayerTypes';
import { ValidTokens } from '@/lib/types/ValidTokens';
import { HumanPlayer } from '@/lib/utils/HumanPlayer';
import { AIPlayer } from '@/lib/utils/AIPlayer';
import { Board } from '@/lib/utils/Board';

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

  set board(board: Board) {
    this.gameState.board = board;
  }

  get boardCells() {
    return this.gameState.board.board;
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

    this.board.placeMark(row, col, this.currentPlayer);
    if (this.board.hasWin(row, col, this.currentPlayer)) {
      this.updateScore(this.currentPlayer.token);
    } else if (this.board.isBoardFull()) {
      this.updateScore('d');
    }

    this.gameState = {
      ...this.gameState,
      winner: this.currentPlayer,
      currentPlayer:
        this.currentPlayer.token === 'x' ? this.gameState.playerO : this.gameState.playerX,
    };
    this.updateGameState();
  }

  clearBoard() {
    this.board = new Board();
    this.updateGameState();
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
