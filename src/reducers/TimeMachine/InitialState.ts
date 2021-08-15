import { ITimeMachineReducerState } from './ITimeMachine';

const size = 4;
const initGameValues = Array(size * size).fill(false) as boolean[];
const timeMachineInitialState = {
  currentPosition: 0,
  isTraveling: false,
  squares: initGameValues,
  historySquares: initGameValues,
} as ITimeMachineReducerState;

export default timeMachineInitialState;
