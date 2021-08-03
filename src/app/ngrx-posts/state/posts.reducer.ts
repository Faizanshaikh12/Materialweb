import {Posts} from '../../models/posts';
import {Action, createReducer, on} from '@ngrx/store';
import {addPostSuccess, deletePost, deletePostSuccess, loadPostSuccess, updatePost, updatePostSuccess} from './posts.action';

export interface PostState {
  posts: Posts[];
}

export const initialState: PostState = {
  posts: null
};

// tslint:disable-next-line:variable-name
const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    const post = {...action.post};
    return {
      ...state,
      posts: [...state.posts, post]
    };
  }),
  on(updatePostSuccess, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts
    };
  }),
  on(deletePostSuccess, (state, {id}) => {
    const deletedPosts = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: deletedPosts
    };
  }),
  on(loadPostSuccess, (state, action) => {
    return {
      ...state,
      posts: action.post
    };
  })
);

// tslint:disable-next-line:typedef
export function postReducer(state: PostState, action: Action) {
  return _postReducer(state, action);
}
