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

  get gameStarted() {
    return this.gameState.gameStarted;
  }

  startGame(playerXType: PlayerTypes, playerOType: PlayerTypes) {
    this.setGameState({
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
      board: Array(3)
        .fill(null)
        .map(() => [null, null, null]),
    });
  }
}
