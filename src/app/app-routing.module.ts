import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DisplayShippingComponent } from './pages/display-shipping/display-shipping.component';

const routes: Routes = [
  { path: '', component: DisplayShippingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
