/* eslint no-await-in-loop: 0 */
import React, { useEffect, Reducer, useReducer } from 'react';

import { calculateTicTacToeWinner, sleep } from '../utils/TicTacToeUtils';
import Board from '../components/TicTacToe/Board';
import Menu from '../components/TicTacToe/Menu';
import useTimeMachine from '../hooks/useTimeMachine';
import TicTacToeReducer from '../reducers/TicTacToe/TicTacToeReducer';
import TicTacToeActionTypes from '../reducers/TicTacToe/TicTacToeActionTypes';
import { ITicTacToeReducerState, ITicTacToeReducerAction } from '../reducers/TicTacToe/ITicTacToe';
import InitialState from '../reducers/TicTacToe/InitialState';

const TicTacToe: React.FC = () => {
  const [state, dispatch] = useReducer<Reducer<ITicTacToeReducerState, ITicTacToeReducerAction>>(
    TicTacToeReducer,
    InitialState,
  );

  const {
    winner,
    error,
    currentPosition,
    xIsNext,
    isTraveling,
    isReplaying,
    squares,
    historySquares,
  } = state;

  const [, getPreviousValue, timeLength, reset] = useTimeMachine(historySquares);

  const handleClick = (position: number) => {
    dispatch({
      type: TicTacToeActionTypes.SET_ERROR,
      payload: { error: '' },
    });
    if (!isTraveling) {
      if (historySquares) {
        const newSquares = historySquares.slice();

        if (calculateTicTacToeWinner(historySquares) || !historySquares.includes(null)) {
          dispatch({
            type: TicTacToeActionTypes.SET_ERROR,
            payload: { error: 'The game has ended' },
          });
          return;
        }

        if (historySquares[position]) {
          dispatch({
            type: TicTacToeActionTypes.SET_ERROR,
            payload: { error: 'That position is already taken' },
          });
          return;
        }

        newSquares[position] = xIsNext ? 'x' : 'o';
        dispatch({
          type: TicTacToeActionTypes.SET_NEXT_PLAY,
          payload: {
            xIsNext: !xIsNext,
            squares: newSquares,
          },
        });
      }
    } else {
      dispatch({
        type: TicTacToeActionTypes.SET_ERROR,
        payload: { error: 'You can not alter time events!' },
      });
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
        type: TicTacToeActionTypes.MOVE_IN_TIME,
        payload: {
          currentPosition: newPosition,
          isTraveling: newIsTraveling,
          squares: getPreviousValue(newPosition) ?? InitialState.squares,
        },
      });
    }
  };

  const handleResume = () => {
    dispatch({
      type: TicTacToeActionTypes.MOVE_IN_TIME,
      payload: {
        currentPosition: 0,
        isTraveling: false,
        squares: getPreviousValue(0) ?? InitialState.squares,
      },
    });
  };

  const handleReset = () => {
    reset();
    dispatch({
      type: TicTacToeActionTypes.RESET,
    });
  };

  const handleReplay = async () => {
    dispatch({
      type: TicTacToeActionTypes.REPLAY,
      payload: {
        isTraveling: true,
        isReplaying: true,
      },
    });

    const firstPos = timeLength - 1;
    dispatch({
      type: TicTacToeActionTypes.MOVE_IN_TIME,
      payload: {
        currentPosition: firstPos,
        isTraveling: true,
        squares: getPreviousValue(firstPos) ?? InitialState.squares,
      },
    });

    for (let position = firstPos - 1; position >= 0; position -= 1) {
      await sleep(500).then(() => {
        dispatch({
          type: TicTacToeActionTypes.MOVE_IN_TIME,
          payload: {
            currentPosition: position,
            isTraveling: true,
            squares: getPreviousValue(position) ?? InitialState.squares,
          },
        });
      });
    }

    dispatch({
      type: TicTacToeActionTypes.REPLAY,
      payload: {
        isTraveling: false,
        isReplaying: false,
      },
    });
  };

  useEffect(() => {
    if (historySquares) {
      const newWinner = calculateTicTacToeWinner(historySquares);
      if (newWinner) {
        dispatch({
          type: TicTacToeActionTypes.SET_WINNER,
          payload: {
            winner: newWinner,
          },
        });
      } else if (!historySquares.includes(null)) {
        dispatch({
          type: TicTacToeActionTypes.SET_WINNER,
          payload: {
            winner: "it's a tie",
          },
        });
      }
    }
  }, [historySquares]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>
        <h4>{isTraveling ? 'Traveling in time' : 'You are in present'}</h4>
        {winner && !isReplaying && <h4>{`Winner: ${winner}`}</h4>}
        {error && !isReplaying && <h4>{error}</h4>}
        {isReplaying && <h4>Replay Mode</h4>}
      </div>
      <div>
        <div>
          <Menu
            getPreviousValue={handleGetPrevious}
            handleResume={handleResume}
            handleReset={handleReset}
            handleReplay={handleReplay}
            currentPosition={currentPosition}
            timeLength={timeLength}
            xIsNext={xIsNext}
            winner={winner}
            isReplaying={isReplaying}
          />
        </div>
        <div>
          <Board squares={squares} handleClick={handleClick} isTraveling={isTraveling} />
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
