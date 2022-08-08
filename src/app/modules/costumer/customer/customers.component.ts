import { Component, OnDestroy, OnInit } from "@angular/core";
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from "@angular/router";

import { CustomerService } from "../customer.service";
import { Serializer } from "@shared/serializer";
import { Customer } from "../customer-type";

@Component({
    selector: 'app-costumers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
    displayedColumns = ['lastname', 'phoneNumber', 'email', 'bankAccountNumber', 'action'];
    dataSource: Customer[] = [];
    constructor(
        private customerService: CustomerService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.customerService.getAll()
            .subscribe((data) => {
                this.dataSource = data;
            })
    }

    openEditingCustomerForm(item: Customer) {
        console.log(item.id)
        this.router.navigate([`/edit`, item.id])
    }
    confirmDeleteItem(item: Customer) {
        //delete
    }
    ngOnDestroy(): void {

    }
}