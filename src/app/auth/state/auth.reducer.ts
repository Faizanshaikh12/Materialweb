import {createReducer, on} from '@ngrx/store';
import {User} from '../../models/User';
import { autoLogout, loginSuccess, signupSuccess} from './auth.action';

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
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(autoLogout, state => {
    return {
      ...state,
      user: null,
    };
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
