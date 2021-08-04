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
import {filter, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {ROUTER_NAVIGATION, routerNavigatedAction, RouterNavigationAction} from '@ngrx/router-store';
import {Update} from '@ngrx/entity';
import {Posts} from '../../models/posts';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {getPosts} from './posts.selector';
import {of} from 'rxjs';
import {dummyAction} from '../../auth/state/auth.action';

@Injectable()
export class PostsEffects {
  constructor(
    private acions$: Actions,
    private postService: PostService,
    private store: Store<AppState>
  ) {
  }

  loadPost$ = createEffect(() => {
    return this.acions$.pipe(
      ofType(loadPost),
      withLatestFrom(this.store.select(getPosts)),
      mergeMap(([action, posts]) => {
        if (!posts.length || posts.length === 1) {
          return this.postService.getPost().pipe(
            map((post) => {
              return loadPostSuccess({post});
            })
          );
        }
        return of(dummyAction());
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
            const updatedPost: Update<Posts> = {
              id: action.post.id,
              changes: {
                ...action.post,
              }
            };
            return updatePostSuccess({post: updatedPost});
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
      withLatestFrom(this.store.select(getPosts)),
      switchMap(([id, posts]) => {
        if (!posts.length) {
          return this.postService.getPostById(id).pipe(map((post) => {
            const postData = [{...post, id}];
            return loadPostSuccess({post: postData});
          }));
        }
        return of(dummyAction());
      })
    );
  });
}
