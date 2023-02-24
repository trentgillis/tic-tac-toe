import { GameState } from '@/lib/types/GameState';
import { PlayerWinPossibilities } from '@/lib/types/PlayerTypes';
import { ValidTokens } from '@/lib/types/ValidTokens';
import { HumanPlayer } from '@/lib/utils/HumanPlayer';
import { AIPlayer } from '@/lib/utils/AIPlayer';
import { Board } from '@/lib/utils/Board';
import { initialGameState } from '@/lib/utils/initialGameState';

export const GAME_DATA_LOCAL_STORAGE_KEY = 'game-data';

export class GameEngine {
  private _gameState: GameState;
  private setGameState: React.Dispatch<React.SetStateAction<GameState>>;

  constructor(
    _gameState: GameState,
    setGameState: React.Dispatch<React.SetStateAction<GameState>>
  ) {
    this.setGameState = setGameState;
    this._gameState = _gameState;
  }

  get winner() {
    return this._gameState.winner;
  }

  get currentPlayer() {
    return this._gameState.currentPlayer;
  }

  get gameType() {
    return this._gameState.gameType;
  }

  get gameInProgress() {
    return this._gameState.inProgress;
  }

  get board() {
    return this._gameState.board;
  }

  get boardCells() {
    return this._gameState.board.board;
  }

  get playerScores() {
    return {
      x: this._gameState.playerX?.score,
      o: this._gameState.playerO?.score,
      d: this._gameState.draws,
    };
  }

  get playerX() {
    return this._gameState.playerX;
  }

  get playerO() {
    return this._gameState.playerO;
  }

  get roundCompleted() {
    return this._gameState.roundCompleted;
  }

  get winningPositions() {
    return this._gameState.winningPositions;
  }

  get gameState() {
    return this._gameState;
  }

  static loadPreviousGame(previousGameState: GameState): GameState {
    if (previousGameState.gameType === 'ai') {
      return this.loadPreviousAIGame(previousGameState);
    } else {
      return this.loadPreviousPlayerGame(previousGameState);
    }
  }

  startHumanGame(selectedToken: ValidTokens) {
    let playerX;
    let playerO;
    if (selectedToken === 'x') {
      playerX = new HumanPlayer('x', 0, 'Player 1', 'P1');
      playerO = new HumanPlayer('o', 0, 'Player 2', 'P2');
    } else {
      playerX = new HumanPlayer('x', 0, 'Player 2', 'P2');
      playerO = new HumanPlayer('o', 0, 'Player 1', 'P1');
    }

    this.updateGameState({
      ...this._gameState,
      gameType: 'pvp',
      inProgress: true,
      currentPlayer: playerX,
      winner: null,
      playerX,
      playerO,
      draws: 0,
    });
  }

  startAIGame(selectedToken: ValidTokens) {
    let playerX;
    let playerO;
    if (selectedToken === 'x') {
      playerX = new HumanPlayer('x', 0, 'Player 1', 'You', 'You win!');
      playerO = new AIPlayer('o', 0);
    } else {
      playerX = new AIPlayer('x', 0);
      playerO = new HumanPlayer('o', 0, 'Player 1', 'You', 'You win!');
    }

    this.updateGameState({
      ...this._gameState,
      gameType: 'ai',
      inProgress: true,
      currentPlayer: playerX,
      winner: null,
      playerX,
      playerO,
      draws: 0,
    });
  }

  restartGame() {
    localStorage.removeItem(GAME_DATA_LOCAL_STORAGE_KEY);

    this.updateGameState({
      ...initialGameState,
      board: new Board(),
    });
  }

  nextRound() {
    this.updateGameState({
      ...this._gameState,
      roundCompleted: false,
      winner: null,
      winningPositions: null,
      currentPlayer: this._gameState.playerX,
      board: new Board(),
    });
  }

  playerTurn(row: number, col: number) {
    if (!this.currentPlayer) {
      throw new Error('Game is in invalid state. Cannot perform player move.');
    }

    let winningPositions: number[][] = [];
    let winningPlayer = null;
    let roundCompleted = false;

    this.board.placeToken(row, col, this.currentPlayer.token);
    if (this.board.hasWin) {
      roundCompleted = true;
      winningPlayer = this.currentPlayer;
      winningPositions = this.board.winningPositions;

      this.updateScore(this.currentPlayer.token);
    } else if (this.board.hasDraw) {
      roundCompleted = true;
      this.updateScore('d');
    }

    this.updateGameState({
      ...this._gameState,
      roundCompleted,
      winner: winningPlayer,
      winningPositions,
      currentPlayer:
        this.currentPlayer.token === 'x' ? this._gameState.playerO : this._gameState.playerX,
    });
  }

  private static loadPreviousAIGame(previousGameState: GameState): GameState {
    let playerX: AIPlayer | HumanPlayer;
    let playerO: AIPlayer | HumanPlayer;
    if (previousGameState.playerX?.playerShortName === 'AI') {
      playerX = new AIPlayer('x', previousGameState.playerX?.score);
      playerO = new HumanPlayer(
        'o',
        previousGameState.playerO?.score || 0,
        'Player 1',
        'You',
        'You win!'
      );
    } else {
      playerX = new HumanPlayer(
        'x',
        previousGameState.playerX?.score || 0,
        'Player 1',
        'You',
        'You win!'
      );
      playerO = new AIPlayer('o', previousGameState.playerO?.score);
    }

    return {
      ...previousGameState,
      playerX,
      playerO,
      board: new Board(previousGameState.board.board),
    };
  }

  private static loadPreviousPlayerGame(previousGameState: GameState): GameState {
    const playerX: HumanPlayer = new HumanPlayer(
      'x',
      previousGameState.playerX?.score || 0,
      previousGameState.playerX?.playerName as string,
      previousGameState.playerX?.playerShortName as string,
      previousGameState.playerX?.winMessage as string
    );
    const playerO: HumanPlayer = new HumanPlayer(
      'o',
      previousGameState.playerO?.score || 0,
      previousGameState.playerO?.playerName as string,
      previousGameState.playerO?.playerShortName as string,
      previousGameState.playerO?.winMessage as string
    );

    return {
      ...previousGameState,
      playerX,
      playerO,
      board: new Board(previousGameState.board.board),
    };
  }

  private updateGameState(_gameState: GameState) {
    this.setGameState({
      ..._gameState,
    });
  }

  private updateScore(winner: PlayerWinPossibilities) {
    if (!this._gameState.playerX || !this._gameState.playerO) {
      throw new Error('Game state is null, cannot perform method updateScore.');
    }

    if (winner === 'x') {
      this._gameState.playerX.updateScore();
    } else if (winner === 'o') {
      this._gameState.playerO.updateScore();
    } else if (winner === 'd') {
      this._gameState.draws += 1;
    }

    this.updateGameState({
      ...this._gameState,
    });
  }
}
