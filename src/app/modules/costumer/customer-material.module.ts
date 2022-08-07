import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';

const materialModules = [
  A11yModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatRadioModule,
  MatButtonModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatCheckboxModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class CustomerMaterialModule { }