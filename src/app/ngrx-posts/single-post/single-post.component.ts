import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Posts} from '../../models/posts';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {getPostById} from '../state/posts.selector';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Observable<Posts>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.post =  this.store.select(getPostById);
  }

}
