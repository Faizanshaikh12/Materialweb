import {SHARED_STATE_NAME} from '../ngrx-shared/shared.selector';
import {SharedReducer, SharedState} from '../ngrx-shared/shared.reducer';
import {AuthReducer, AuthState} from '../auth/state/auth.reducer';
import {AUTH_STATE_NAME} from '../auth/state/auth.selector';

export interface AppState{
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
