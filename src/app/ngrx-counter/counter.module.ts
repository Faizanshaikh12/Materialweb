import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CounterRoutingModule} from './counter-routing.module';
import {CounterComponent} from './counter/counter.component';
import {CounterOutputComponent} from './counter-output/counter-output.component';
import {CounterButtonComponent} from './counter-button/counter-button.component';
import {CustomCounterInputComponent} from './custom-counter-input/custom-counter-input.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './state/counter.reducer';
import {COUNTER_STATE_NAME} from './state/counter.selectors';


@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterRoutingModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ]
})
export class CounterModule {
}
