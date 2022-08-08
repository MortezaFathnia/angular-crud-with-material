import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { CustomerFromComponent } from './customer/customer-form.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: ''
  // },
  {
    path: '',
    component: CustomerComponent
  },
  {
    path: 'edit/:id',
    component: CustomerFromComponent
  },
  {
    path: 'add',
    component: CustomerFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }