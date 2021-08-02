import { Component, OnInit } from '@angular/core';
import {CscService} from '../../services/csc.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  countryData = null;
  constructor(private cscApi: CscService) {}

  ngOnInit(): void {
    this.cscApi.getCountries().subscribe((data) => {
      this.countryData = data;
      console.log(this.countryData);
    });
  }

}
