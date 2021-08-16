/* eslint-disable */
import React, { Reducer, useReducer } from 'react';

import Board from '../components/TimeMachine/Board';
import Menu from '../components/TimeMachine/Menu';
import useTimeMachine from '../hooks/useTimeMachine';
import TimeMachineReducer from '../reducers/TimeMachine/TimeMachineReducer';
import {
  ITimeMachineReducerState,
  ITimeMachineReducerAction,
} from '../reducers/TimeMachine/ITimeMachine';
import TimeMachineActionsTypes from '../reducers/TimeMachine/TimeMachineActionTypes';
import InitialState from '../reducers/TimeMachine/InitialState';

const TimeMachine: React.FC = () => {
  const size = 4;
  const initTimeMachineValues = Array(size * size).fill(false) as boolean[];
  const [state, dispatch] = useReducer<
    Reducer<ITimeMachineReducerState, ITimeMachineReducerAction>
  >(TimeMachineReducer, InitialState);

  const { currentPosition, isTraveling, squares, historySquares } = state;

  const [, getPreviousValue, timeLength] = useTimeMachine(historySquares);

  const handleClick = (position: number) => {
    if (!isTraveling) {
      const newSquares = initTimeMachineValues;
      if (newSquares) {
        newSquares[position] = true;
        dispatch({
          type: TimeMachineActionsTypes.SET_NEXT_OPTION,
          payload: {
            squares: newSquares,
          },
        });
      }
    }
  };

  const handleGetPrevious = (step: number) => {
    if (currentPosition !== undefined) {
      const newPosition = currentPosition + step;
      let newIsTraveling = false;

      if (newPosition !== 0) {
        newIsTraveling = true;
      } else {
        newIsTraveling = false;
      }

      dispatch({
        type: TimeMachineActionsTypes.MOVE_IN_TIME,
        payload: {
          currentPosition: newPosition,
          isTraveling: newIsTraveling,
          squares: getPreviousValue(newPosition) ?? initTimeMachineValues,
        },
      });
    }
  };

  const handleResume = () => {
    dispatch({
      type: TimeMachineActionsTypes.MOVE_IN_TIME,
      payload: {
        currentPosition: 0,
        isTraveling: false,
        squares: getPreviousValue(0) ?? initTimeMachineValues,
      },
    });
  };
  return (
    <div>
      <h1>Time Machine</h1>
      <div>
        <h5>{isTraveling ? 'Traveling in time' : 'You are in present'}</h5>
      </div>
      <div>
        <div>
          <Board squares={squares} handleClick={handleClick} isTraveling={isTraveling} />
        </div>
        <div>
          <Menu
            getPreviousValue={handleGetPrevious}
            handleResume={handleResume}
            currentPosition={currentPosition}
            timeLength={timeLength}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeMachine;
