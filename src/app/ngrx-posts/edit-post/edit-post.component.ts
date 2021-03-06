import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {getPostById} from '../state/posts.selector';
import {Posts} from '../../models/posts';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {updatePost} from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  posts: Posts;
  postForm: FormGroup;
  postSubsciption: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.postSubsciption = this.store.select(getPostById).subscribe((post) => {
      if (post) {
        this.posts = post;
        this.postForm.patchValue({
          title: post.title,
          description: post.description
        });
      }
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(20)])
    });
  }

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }

    const post: Posts = {
      id: this.posts.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }

  ngOnDestroy() {
    if (this.postSubsciption) {
      this.postSubsciption.unsubscribe();
    }
  }

}
