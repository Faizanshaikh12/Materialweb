import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PostState} from './posts.reducer';
import {getCurrentRoute} from '../../store/router/router.selector';
import {RouterStateUrl} from '../../store/router/custom-serializer';

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPosts, getCurrentRoute, (
  posts, route: RouterStateUrl) => {
  return posts ? posts.find((post) => post.id === route.params.id) : null;
});
