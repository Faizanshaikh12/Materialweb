import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  item = {
    email: '',
    password: ''
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }


  saveItem(form: NgForm): void {
    const data = {
      email: this.item.email,
      password: this.item.password
    };
    this.auth.login(data).subscribe((res) => {
        if (this.auth.isLoggedIn) {
          const redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/';
          this.router.navigate([redirect]);
          this._snackBar.open('Login Succesffully', 'End now', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      },
      err => {
        this._snackBar.open('Login Not Succesffully', 'End now', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    form.resetForm();
  }

}
