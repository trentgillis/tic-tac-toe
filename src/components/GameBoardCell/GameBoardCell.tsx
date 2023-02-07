import styles from './GameBoardCell.module.css';

type GameBoardCellProps = {
  row: number;
  col: number;
};

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  return <div className={styles['game-board-cell']}></div>;
}
