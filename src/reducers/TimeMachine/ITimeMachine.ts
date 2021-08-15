import TimeMachineActionsTypes from './TimeMachineActionTypes';

export interface ITimeMachineReducerAction {
  type: TimeMachineActionsTypes;
  payload: {
    currentPosition?: number;
    isTraveling?: boolean;
    squares?: boolean[];
  };
}

export interface ITimeMachineReducerState {
  currentPosition: number | undefined;
  isTraveling: boolean | undefined;
  squares: boolean[] | undefined;
  historySquares: boolean[] | undefined;
}
