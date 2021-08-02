import {createAction, props} from '@ngrx/store';
import {Posts} from '../../models/posts';

export const ADD_POST_ACTION = '[Post Page] add post';
export const UPDATE_POST_ACTION = '[Post Page] update post';
export const DELETE_POST_ACTION = '[Post Page] delete post';

export const addPost = createAction(
  ADD_POST_ACTION,
  props<{ post: Posts }>()
);

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Posts }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);
