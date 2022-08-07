import { Component, OnDestroy, OnInit } from "@angular/core";
import { map } from 'rxjs/operators';
import { CustomerService } from "../customer.service";
import { Serializer } from "@shared/serializer";
import { Customer } from "../customer-type";

@Component({
    selector: 'app-costumers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
    displayedColumns = ['lastname', 'phoneNumber', 'email', 'bankAccountNumber','action'];
    dataSource: Customer[] = [];
    constructor(
        private customerService: CustomerService
    ) { }

    ngOnInit(): void {
        this.customerService.getAll()
            .pipe(
                map(item => Serializer.serialize(item))
            ).subscribe((data) => {
                this.dataSource = data as Customer[];
            })
    }
    openEditingCustomerForm(item:Customer){

    }
    confirmDeleteItem(item:Customer){

    }
    ngOnDestroy(): void {

    }
}