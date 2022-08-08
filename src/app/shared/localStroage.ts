import { Observable, of } from "rxjs";
import { Customer } from "../modules/costumer/customer-type";

export class Storage {
    private customers: Customer[] = [];
    constructor() {
        localStorage.setItem('customers', JSON.stringify([]));
    }
    static getAll(): Observable<Customer[]> {
        let customers = JSON.parse(localStorage.getItem('customers') || '[]');
        return of(customers);
    }

    static getItemById(id: number): Observable<Customer> {
        let customers = JSON.parse(localStorage.getItem('customers') || '[]');
        const customer = customers.find((item: Customer) => item.id === id);
        return of(customer);
    }

    static create(customer: Customer): Observable<Customer> | Observable<string> {
        let customers = JSON.parse(localStorage.getItem('customers') || '[]');
        const customerExist = customers.filter((item: Customer) => item.firstname === customer.firstname || item.lastname === customer.lastname || item.dateOfBirth === customer.dateOfBirth);
        if (customerExist) {
            const str = of('Customer created before');
            return str;
        }
        customer.id = customers.length + 1;
        customers = [...customers, customer]
        localStorage.setItem('customers', JSON.stringify(customers));
        return of(customer);
    }

    static deleteItem(id: number): Observable<Customer> {
        let customers = JSON.parse(localStorage.getItem('customers') || '[]');
        const customerDeleted = customers.find((item: Customer) => item.id === id);
        const customerExist = customers.filter((item: Customer) => item.id !== id);
        localStorage.setItem('customers', JSON.stringify(customerExist));
        return of(customerDeleted);
    }

    static updateItem(customer: Customer): Observable<Customer> {
        let customers = JSON.parse(localStorage.getItem('customers') || '[]');
        let customerExist = customers.filter((item: Customer) => item.id !== customer.id);
        customerExist = [...customerExist, customer]
        localStorage.setItem('customers', JSON.stringify(customerExist));
        return of(customer);
    }
}