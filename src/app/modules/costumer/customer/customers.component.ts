import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { takeUntil, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from "@angular/router";

import { CustomerService } from "../customer.service";
import { Serializer } from "@shared/serializer";
import { Customer } from "../customer-type";
import { Subject } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NotificationService } from "@shared/notification";
import { messages } from "../customer-messages";

export interface DialogData {
    firstname: string;
    lastname: string;
}

@Component({
    selector: 'app-costumers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
    private ngDestroy$ = new Subject();
    displayedColumns = ['lastname', 'phoneNumber', 'email', 'bankAccountNumber', 'action'];
    dataSource: Customer[] = [];
    constructor(
        private customerService: CustomerService,
        private activatedRoute: ActivatedRoute,
        private notification: NotificationService,
        private router: Router,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.getAllCustomers();
    }

    openEditingCustomerForm(item: Customer) {
        this.router.navigate([`edit`, item.id], { relativeTo: this.activatedRoute });
    }

    confirmDeleteItem(item: Customer) {
        const dialogRef = this.dialog.open(ConfirmDialog, {
            width: '250px',
            data: { firstname: item.firstname, lastname: item.lastname },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result && item.id) {
                this.customerService.deleteItem(item.id).pipe(take(1))
                    .subscribe((data) => {
                        this.notification.notify(messages['DELETED']);
                        this.getAllCustomers();
                    });
            }
        });
    }

    getAllCustomers(): void {
        this.customerService.getAll().pipe(takeUntil(this.ngDestroy$))
            .subscribe((data) => {
                this.dataSource = data;
            })
    }

    ngOnDestroy(): void {
        this.ngDestroy$.next('');
        this.ngDestroy$.complete();
    }
}

@Component({
    selector: 'dialog-confirm',
    templateUrl: 'dialog-content.html',
})
export class ConfirmDialog {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }
}