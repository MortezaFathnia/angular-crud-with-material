import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFromComponent } from './modules/costumer/customer/customer-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CustomerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
