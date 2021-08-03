import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostsListComponent} from './posts-list/posts-list.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PostComponent} from './post/post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {postReducer} from './state/posts.reducer';
import {POST_STATE_NAME} from './state/posts.selector';
import {EffectsModule} from '@ngrx/effects';
import {PostsEffects} from './state/posts.effects';


@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    PostComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST_STATE_NAME, postReducer),
    EffectsModule.forFeature([PostsEffects]),
  ]
})

export class PostModule {
}
