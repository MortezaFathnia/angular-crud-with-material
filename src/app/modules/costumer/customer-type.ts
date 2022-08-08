export interface Customer {
	id?: number;
	firstname: string;
	lastname: string;
	dateOfBirth: number;
	phoneNumber: number;
	email: string;
	bankAccountNumber: number;
	deleted?:boolean;
}