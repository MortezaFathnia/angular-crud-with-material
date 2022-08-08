import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from "../customer-type";
import { CustomerService } from "../customer.service";

@Component({
    selector: 'app-costumer',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss']
})
export class CustomerFromComponent implements OnInit, OnDestroy {

    form = new FormGroup({});
    customerId: string | null = '';
    customer = {};

    constructor(
        private formBuilder: FormBuilder,
        activatedRoute: ActivatedRoute,
        private customerService: CustomerService
    ) {
        this.customerId = activatedRoute.snapshot.paramMap.get('id')
        if (this.customerId) {
            this.getCustomerById(+this.customerId)
        }
        this.createForm();
    }

    ngOnInit(): void {



    }

    save(valid: boolean, value: Customer): void {
        if (!!this.customer && this.customerId) {
            value.id = +this.customerId
            this.customerService.update(value).subscribe(data => {
                console.log(data)
            })
        } else {
            this.customerService.create(value).subscribe(data => {
                console.log(data)
            });
        }

    }

    getCustomerById(customerId: number) {
        this.customerService.getItemById(customerId).subscribe(data => {
            this.customer = data;
            this.form.patchValue(this.customer);
        })
    }

    createForm() {
        this.form = this.formBuilder.group({
            firstname: [''],
            lastname: [''],
            dateOfBirth: [''],
            phoneNumber: [''],
            email: [''],
            bankAccountNumber: ['']
        });
    }


    ngOnDestroy(): void {

    }
}