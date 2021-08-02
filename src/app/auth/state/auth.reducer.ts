import {createReducer, on} from '@ngrx/store';
import {User} from '../../models/User';
import {loginSuccess} from './auth.action';

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
