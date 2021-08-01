import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './home/home.component';
import {FormsComponent} from './components/forms/forms.component';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {PhotoBase64ComponentComponent} from './components/photo-base64-component/photo-base64-component.component';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {MultiplpInputComponent} from './components/multiplp-input/multiplp-input.component';
import {StripePaymentComponent} from './components/stripe-payment/stripe-payment.component';
import {CounterComponent} from './ngrx-counter/counter/counter.component';
import {PostsListComponent} from './ngrx-posts/posts-list/posts-list.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'register', component: RegisterComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'forms', component: FormsComponent},
  // { path: 'tables', component: DataTableComponent},
  { path: 'image_upload', component: ImageUploadComponent},
  { path: 'muti_input', component: MultiplpInputComponent},
  { path: 'stripe_pay', component: StripePaymentComponent},
  { path: 'counter', component: CounterComponent},
  // { path: 'base64', component: PhotoBase64ComponentComponent},
  // {
  //   path: '',
  //   component: DefaultComponent,
  //   children: [{
  //     path: '',
  //     component: DashboardComponent
  //   }, {
  //     path: 'posts',
  //     component: PostsComponent
  //   }]
  // }

  // {
  //   path: '',
  //   redirectTo: '/students',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'students',
  //   component: StudentsComponent
  // }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
