import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {PostService} from '../../services/post.service';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPost,
  loadPostSuccess,
  updatePost,
  updatePostSuccess
} from './posts.action';
import {filter, map, mergeMap, switchMap} from 'rxjs/operators';
import {ROUTER_NAVIGATION, routerNavigatedAction, RouterNavigationAction} from '@ngrx/router-store';

@Injectable()
export class PostsEffects {
  constructor(private acions$: Actions, private postService: PostService) {
  }

  loadPost$ = createEffect(() => {
    return this.acions$.pipe(
      ofType(loadPost),
      mergeMap((action) => {
        return this.postService.getPost().pipe(
          map((post) => {
            return loadPostSuccess({post});
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.acions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((data) => {
            const post = {...action.post, id: data.name};
            return addPostSuccess({post});
          })
        );
      })
    );
  });

  upatePost$ = createEffect(() => {
    return this.acions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((data) => {
            const post = {...action.post, id: data.name};
            return updatePostSuccess({post: action.post});
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.acions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({id: action.id});
          })
        );
      })
    );
  });

  getSinglePost$ = createEffect(() => {
    return this.acions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/posts/details');
      }),
      map((r: RouterNavigationAction) => {
        return r.payload.routerState['params']['id'];
      }),
      switchMap((id) => {
        return this.postService.getPostById(id).pipe(map((post) => {
          const postData = [{...post, id}];
          return loadPostSuccess({post: postData});
        }));
      })
    );
  });
}
