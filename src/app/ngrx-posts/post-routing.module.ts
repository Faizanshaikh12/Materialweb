import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {AddPostComponent} from './add-post/add-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {path: 'addPost', component: AddPostComponent},
      {path: 'editPost/:id', component: EditPostComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
