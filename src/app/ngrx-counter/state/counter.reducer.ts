// import { initialState } from './counter.state';
import {Action, createReducer, on} from '@ngrx/store';
import {changeChannelName, customIncrement, decrement, increment, reset} from './counter.action';

export interface CounterState {
  counter: number;
  channelName: string;
}

export const initialState: CounterState = {
  counter: 0,
  channelName: 'Ghanshayam Digital'
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeChannelName, (state) => {
    return {
      ...state,
      channelName: 'Ghanshayam Modified',
    };
  }),
);

// tslint:disable-next-line:typedef
export function counterReducer(state: CounterState, action: Action) {
  return _counterReducer(state, action);
}
