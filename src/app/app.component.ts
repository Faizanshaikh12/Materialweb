import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './store/app.state';
import {Store} from '@ngrx/store';
import {getErrorMessage, getLoading} from './ngrx-shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Materialweb';
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
