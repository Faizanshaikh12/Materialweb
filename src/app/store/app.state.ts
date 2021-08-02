import {counterReducer, CounterState} from '../ngrx-counter/state/counter.reducer';
import {postReducer, PostState} from '../ngrx-posts/state/posts.reducer';

export interface AppState{
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer
};
