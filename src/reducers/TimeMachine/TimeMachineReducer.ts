import TimeMachineActionsTypes from './TimeMachineActionTypes';
import InitialState from './InitialState';
import { ITimeMachineReducerAction } from './ITimeMachine';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TimeMachineReducer = (state = InitialState, action: ITimeMachineReducerAction) => {
  const { currentPosition, isTraveling, squares } = action.payload;

  switch (action.type) {
    case TimeMachineActionsTypes.SET_NEXT_OPTION:
      return {
        ...state,
        squares,
        historySquares: squares,
      };
    case TimeMachineActionsTypes.MOVE_IN_TIME:
      return {
        ...state,
        currentPosition,
        isTraveling,
        squares,
      };
    default:
      return state;
  }
};

export default TimeMachineReducer;
