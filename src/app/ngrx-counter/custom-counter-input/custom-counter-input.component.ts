import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.reducer';
import {changeChannelName, customIncrement} from '../state/counter.action';
import {getChannelName} from '../state/counter.selectors';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value: number;
  channelName$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd(){
    this.store.dispatch(customIncrement({count: +this.value}));
  }

  onAddText(){
    this.store.dispatch(changeChannelName());
  }
}
