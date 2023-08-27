import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  constructor() {

  }

  ngOnInit(): void {


  }

  selectedCustomer: any;

  customers: Customer[] = [
    { customerNO: 1, name: 'Nery Ann', address: '', city: 'Berlin', country: 'Germany' },
    { customerNO: 2, name: 'Rahul Raj', address: '', city: 'Delhi', country: 'India' },
    { customerNO: 3, name: 'asdf Raj', address: '', city: 'Delhi', country: 'India' },
    { customerNO: 4, name: 'asdf Raj', address: '', city: 'Delhi', country: 'India' },
    { customerNO: 5, name: 'Rahgasdul Raj', address: '', city: 'Delhi', country: 'India' }
  ]
}





