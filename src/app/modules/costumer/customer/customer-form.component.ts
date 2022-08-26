import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "@shared/notification";
import { Subject, takeUntil } from "rxjs";
import { messages } from "../customer-messages";
import { Customer } from "../customer-type";
import { CustomerService } from "../customer.service";

@Component({
    selector: 'app-costumer',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss']
})
export class CustomerFromComponent implements OnInit, OnDestroy {
    private ngDestroy$ = new Subject();
    form = new FormGroup({});
    customerId: string | null = '';
    customer = {};
    isFormSubmitted = false;
    constructor(
        private formBuilder: FormBuilder,
        activatedRoute: ActivatedRoute,
        private notification: NotificationService,
        private router: Router,
        private customerService: CustomerService
    ) {
        this.customerId = activatedRoute.snapshot.paramMap.get('id');
        this.createForm();
        if (this.customerId) {
            this.getCustomerById(+this.customerId)
        }

    }

    ngOnInit(): void {
    }

    save(valid: boolean, value: Customer): void {
        this.isFormSubmitted = true;
        if (!valid) {
            return;
        }
        if (!!this.customer && this.customerId) {
            value.id = +this.customerId
            this.customerService.update(value).pipe(takeUntil(this.ngDestroy$)).subscribe(data => {
                this.notification.notify(messages['UPDATED']);
                this.router.navigate(['./'])
            })
        } else {
            this.customerService.create(value).pipe(takeUntil(this.ngDestroy$)).subscribe(data => {
                if (data == 'Customer created before') {
                    this.notification.notify(data as string);
                    this.router.navigate(['./']);
                } else {
                    this.notification.notify(messages['CREATED']);
                    this.router.navigate(['./']);
                }
            });
        }

    }

    getCustomerById(customerId: number) {
        this.customerService.getItemById(customerId).pipe(takeUntil(this.ngDestroy$)).subscribe(data => {
            this.customer = data;
            this.form.patchValue(this.customer);
        })
    }

    createForm() {
        const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
        this.form = this.formBuilder.group({
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],
            phoneNumber: ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            email: ['', [Validators.pattern(PAT_EMAIL)]],
            bankAccountNumber: ['', [Validators.pattern("^[0-9]{7,14}$")]]
        });
    }

    backToList(): void {
        this.router.navigate(['./']);
    }

    ngOnDestroy(): void {
        this.ngDestroy$.next('');
        this.ngDestroy$.complete();
    }
}