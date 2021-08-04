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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './ngrx-shared/home/home.component';
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
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {LoadingSpinnerComponent} from './ngrx-shared/loading-spinner/loading-spinner.component';
import {appReducer} from './store/app.state';
import {HeaderComponent} from './ngrx-shared/header/header.component';
import {AuthEffects} from './auth/state/auth.effects';
import {AuthTokenInterceptor} from './services/AuthToken.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {CustomSerializer} from './store/router/custom-serializer';
import { CountComponent } from './count/count.component';
import { CountersComponent } from './count/counters/counters.component';


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
    LoadingSpinnerComponent,
    HeaderComponent,
    CountComponent,
    CountersComponent,
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
    LayoutModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
