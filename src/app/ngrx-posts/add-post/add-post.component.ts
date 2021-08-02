import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Posts} from '../../models/posts';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {addPost} from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(20)])
    });
  }

  addPost() {
    if (this.postForm.invalid) {
      return;
    }
    const post: Posts = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(addPost({post}));
  }

  showDescErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && descriptionForm.invalid) {
      if (descriptionForm.errors.required) {
        return 'Description is required';
      }
      if (descriptionForm.errors.minlength) {
        return 'Description should be minimum 20 character;';
      }
    }
  }

}
