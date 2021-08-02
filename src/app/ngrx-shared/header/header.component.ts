import { Component, OnInit } from '@angular/core';
import {isAuthenticated} from '../../auth/state/auth.selector';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated)
  }

}
