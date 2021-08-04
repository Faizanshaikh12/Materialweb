import {createAction, props} from '@ngrx/store';
import {Posts} from '../../models/posts';
import {Update} from '@ngrx/entity';

export const ADD_POST_ACTION = '[Post Page] add post';
export const ADD_POST_SUCCESS = '[Post Page] add post success';
export const UPDATE_POST_ACTION = '[Post Page] update post';
export const UPDATE_POST_SUCCESS = '[Post Page] update post success';
export const DELETE_POST_ACTION = '[Post Page] delete post';
export const DELETE_POST_SUCCESS = '[Post Page] delete post success';
export const LOAD_POSTS = '[Post Page] load post';
export const LOAD_POSTS_SUCCESS = '[Post Page] load post success';

export const addPost = createAction(
  ADD_POST_ACTION,
  props<{ post: Posts }>()
);

export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{post: Posts}>()
);

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Posts }>()
);

export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: Update<Posts> }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);

export const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>()
);

export const loadPost = createAction(LOAD_POSTS);
export const loadPostSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ post: Posts[] }>()
);
