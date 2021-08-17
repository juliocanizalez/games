import TicTacToeSquareType from '../../types/TicTacToeSquareType';
import { ITicTacToeReducerState } from './ITicTacToe';

const size = 9;
const initGameValues = Array(size).fill(null) as TicTacToeSquareType[];
const InitialState = {
  winner: '',
  error: '',
  currentPosition: 0,
  xIsNext: true,
  isTraveling: false,
  isReplaying: false,
  squares: initGameValues,
  historySquares: initGameValues,
} as ITicTacToeReducerState;

export default InitialState;
