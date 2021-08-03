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
import {map, mergeMap, switchMap} from 'rxjs/operators';

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
}
