import {Component, OnInit} from '@angular/core';

export class Model {
  name: string;
}

@Component({
  selector: 'app-multiplp-input',
  templateUrl: './multiplp-input.component.html',
  styleUrls: ['./multiplp-input.component.css']
})
export class MultiplpInputComponent implements OnInit {

  home = new Model();
  data = [];

  constructor() {
  }

  ngOnInit(): void {
    this.home = new Model();
    this.data.push(this.home);
  }

  onSubmit() {
    console.log(this.data);
  }

  addForm() {
    this.home = new Model();
    this.data.push(this.home);
  }

  removeAddress(i: number) {
    this.data.splice(i, 1);
  }
}
