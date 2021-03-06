import {Component, OnInit} from '@angular/core';
import {Posts} from '../../models/posts';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {getCounter} from '../../ngrx-counter/state/counter.selectors';
import {getPosts} from '../state/posts.selector';
import {deletePost, loadPost} from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Posts[]>;

  constructor(private store: Store<AppState>) {
  }

  // get & Load Post Data
  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPost());
  }

  // Delete Post Data
  onDeletePost(id: string) {
    if (confirm('Are you sure delete the post')) {
      this.store.dispatch(deletePost({id}));
    }
  }
}
