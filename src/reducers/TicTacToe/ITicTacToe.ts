import TicTacToeActionTypes from './TicTacToeActionTypes';
import TicTacToeSquareType from '../../types/TicTacToeSquareType';

export interface ITicTacToeReducerAction {
  type: TicTacToeActionTypes;
  payload?: {
    winner?: TicTacToeSquareType | string;
    error?: string;
    currentPosition?: number;
    xIsNext?: boolean;
    isTraveling?: boolean;
    isReplaying?: boolean;
    squares?: TicTacToeSquareType[];
  };
}

export interface ITicTacToeReducerState {
  winner: TicTacToeSquareType | string | undefined;
  error: string | undefined;
  currentPosition: number | undefined;
  xIsNext: boolean | undefined;
  isTraveling: boolean | undefined;
  isReplaying: boolean | undefined;
  squares: TicTacToeSquareType[] | undefined;
  historySquares: TicTacToeSquareType[] | undefined;
}
