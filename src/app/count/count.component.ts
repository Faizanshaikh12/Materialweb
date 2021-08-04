import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  myCount = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  countChange(event) {
    this.myCount = event;
  }

}
