import {Posts} from '../../models/posts';
import {Action, createReducer, on} from '@ngrx/store';
import {addPost, deletePost, updatePost} from './posts.action';

export interface PostState {
  posts: Posts[];
}

export const initialState: PostState = {
  posts: []
};

// tslint:disable-next-line:variable-name
const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    const post = {...action.post};
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post]
    };
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts
    };
  }),
  on(deletePost, (state, {id}) => {
    const deletedPosts = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: deletedPosts
    };
  })
);

// tslint:disable-next-line:typedef
export function postReducer(state: PostState, action: Action) {
  return _postReducer(state, action);
}
