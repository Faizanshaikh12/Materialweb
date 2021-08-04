import {Posts} from '../../models/posts';
import {Action, createReducer, on} from '@ngrx/store';
import {addPostSuccess, deletePost, deletePostSuccess, loadPostSuccess, updatePost, updatePostSuccess} from './posts.action';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export interface PostState extends EntityState<Posts> {
  count: number;
}

export const postAdapter = createEntityAdapter<Posts>({
  sortComparer: sortByname,
});

export function sortByname(a: Posts, b: Posts): number {
  return a.title.localeCompare(b.title);
}

export const initialState: PostState = postAdapter.getInitialState({
  count: 0,
});

// tslint:disable-next-line:variable-name
const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postAdapter.addOne(action.post, state);
  }),
  on(updatePostSuccess, (state, action) => {
    return postAdapter.updateOne(action.post, state);
  }),
  on(deletePostSuccess, (state, {id}) => {
    return postAdapter.removeOne(id, state);
  }),
  on(loadPostSuccess, (state, action) => {
    return postAdapter.setAll(action.post, state);
  })
);

// tslint:disable-next-line:typedef
export function postReducer(state: PostState, action: Action) {
  return _postReducer(state, action);
}
