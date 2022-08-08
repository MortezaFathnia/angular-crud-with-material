import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Customer } from "../customer-type";

@Component({
    selector: 'app-costumer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
    constructor(
        private router:Router
    ) { }

    ngOnInit(): void {
     
    }

    openAddingCustomerForm() {
        this.router.navigate(['/add'])
    }
    ngOnDestroy(): void {

    }
}