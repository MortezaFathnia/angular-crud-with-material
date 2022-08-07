import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerMaterialModule } from "./customer-material.module";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerService } from "./customer.service";
import { CustomerFromComponent } from "./customer/customer-form.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomersComponent } from "./customer/customers.component";

@NgModule({
    declarations:[
        CustomerComponent,
        CustomersComponent,
        CustomerFromComponent
    ],
    imports:[
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        CustomerMaterialModule
    ],
    providers:[
        CustomerService
    ]
})
export class CustomerModule{}