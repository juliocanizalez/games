import TicTacToeActionTypes from './TicTacToeActionTypes';
import { ITicTacToeReducerAction } from './ITicTacToe';
import InitialState from './InitialState';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ticTacToeReducer = (state = InitialState, action: ITicTacToeReducerAction) => {
  const { winner, error, currentPosition, xIsNext, isTraveling, isReplaying, squares } =
    action.payload ?? {};
  switch (action.type) {
    case TicTacToeActionTypes.SET_WINNER:
      return { ...state, winner };

    case TicTacToeActionTypes.SET_ERROR:
      return { ...state, error };

    case TicTacToeActionTypes.SET_NEXT_PLAY:
      return {
        ...state,
        xIsNext,
        squares,
        historySquares: squares,
      };

    case TicTacToeActionTypes.MOVE_IN_TIME:
      return {
        ...state,
        currentPosition,
        isTraveling,
        squares,
      };

    case TicTacToeActionTypes.RESET:
      return InitialState;

    case TicTacToeActionTypes.REPLAY:
      return {
        ...state,
        isTraveling,
        isReplaying,
      };

    default:
      return state;
  }
};

export default ticTacToeReducer;
