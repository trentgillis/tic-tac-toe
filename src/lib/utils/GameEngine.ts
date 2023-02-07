import { GameState } from '@/lib/types/GameState';
import { PlayerTypes } from '@/lib/types/PlayerTypes';

export class GameEngine {
  gameState: GameState;

  private setGameState: React.Dispatch<React.SetStateAction<GameState>>;

  constructor(gameState: GameState, setGameState: React.Dispatch<React.SetStateAction<GameState>>) {
    this.setGameState = setGameState;
    this.gameState = gameState;
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

  startGame(playerXType: PlayerTypes, playerOType: PlayerTypes) {
    this.setGameState({
      ...this.gameState,
      gameStarted: true,
      currentPlayer: 'x',
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
    const updatedBoard = this.gameState.board;
    this.gameState.board[row][col] = this.currentPlayer;

    this.setGameState({
      ...this.gameState,
      currentPlayer: this.currentPlayer === 'x' ? 'o' : 'x',
      board: updatedBoard,
    });
  }
}
