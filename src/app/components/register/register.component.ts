import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  item = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private auth: AuthService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  saveItem(form: NgForm): void {
    const data = {
      firstname: this.item.firstname,
      lastname: this.item.lastname,
      email: this.item.email,
      phone: this.item.phone,
      password: this.item.password,
    };
    this.auth.create(data).subscribe(res => {
        // @ts-ignore
        if (res){
          this._snackBar.open('Register Succesffully', 'End now', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }

      },
      err => {
        console.log(err);
      });
    form.resetForm();
  }


}
