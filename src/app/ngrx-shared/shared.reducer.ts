import {createReducer, on} from '@ngrx/store';
import {setErrorMessage, setLoadingSpinner} from './shared.action';

export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}

export const initialState: SharedState = {
  showLoading: false,
   errorMessage: ''
};

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status
    };
  }),
  on(setErrorMessage, (state, action) => {
    return{
      ...state,
      errorMessage: action.message
    }
  })
);

export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
