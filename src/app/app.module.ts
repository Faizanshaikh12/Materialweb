import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from './app-routing.module';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsComponent} from './components/forms/forms.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {DefaultModule} from './layouts/default/default.module';
import {DataTableComponent} from './components/data-table/data-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {PhotoBase64ComponentComponent} from './components/photo-base64-component/photo-base64-component.component';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {MultiplpInputComponent} from './components/multiplp-input/multiplp-input.component';
import {StripePaymentComponent} from './components/stripe-payment/stripe-payment.component';
import {LayoutModule} from '@angular/cdk/layout';
import {CounterComponent} from './ngrx-counter/counter/counter.component';
import {CounterOutputComponent} from './ngrx-counter/counter-output/counter-output.component';
import {CounterButtonComponent} from './ngrx-counter/counter-button/counter-button.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './ngrx-counter/state/counter.reducer';
import { CustomCounterInputComponent } from './ngrx-counter/custom-counter-input/custom-counter-input.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostsListComponent } from './ngrx-posts/posts-list/posts-list.component';
import {appReducer} from './store/app.state';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';


// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FormsComponent,
    DataTableComponent,
    PhotoBase64ComponentComponent,
    ImageUploadComponent,
    MultiplpInputComponent,
    StripePaymentComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSliderModule,
    DefaultModule,
    MatPaginatorModule,
    MatTableModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
