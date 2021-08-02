import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {signupStart} from '../state/auth.action';
import {setLoadingSpinner} from '../../ngrx-shared/shared.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }

  onSignUp() {
    if (this.signupForm.invalid) {
      return;
    }
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(signupStart({email, password}));
  }

}
