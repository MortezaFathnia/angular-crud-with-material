import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NotificationModule } from "@shared/notification";
import { CustomerMaterialModule } from "./customer-material.module";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerService } from "./customer.service";
import { CustomerFromComponent } from "./customer/customer-form.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomersComponent, ConfirmDialog } from "./customer/customers.component";

@NgModule({
    declarations:[
        CustomerComponent,
        CustomersComponent,
        ConfirmDialog,
        CustomerFromComponent,
    ],
    imports:[
        CommonModule,
        CustomerRoutingModule,
        NotificationModule,
        ReactiveFormsModule,
        CustomerMaterialModule
    ],
    providers:[
        CustomerService
    ]
})
export class CustomerModule{}