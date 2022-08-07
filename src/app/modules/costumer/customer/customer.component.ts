import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-costumer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
    constructor(
    ) { }

    ngOnInit(): void {
        console.log(124)
    }

    ngOnDestroy(): void {

    }
}