import {createFeatureSelector, createSelector} from '@ngrx/store';
import {postAdapter, PostState} from './posts.reducer';
import {getCurrentRoute} from '../../store/router/router.selector';
import {RouterStateUrl} from '../../store/router/custom-serializer';

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const postSelector = postAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postSelector.selectAll);
export const getPostEntites = createSelector(
  getPostsState,
  postSelector.selectEntities
);

export const getPostById = createSelector(
  getPostEntites,
  getCurrentRoute, (
    posts, route: RouterStateUrl) => {
    return posts ? posts[route.params.id] : null;
  });
