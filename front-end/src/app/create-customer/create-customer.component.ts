import { CustomerService } from '../customer.service';
import { Customer} from '../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer = new Customer(2,'raj',25,'savings','nellore',false);//empty
  submitted = false;

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer(2,'raj',25,'savings','nellore',false);//empty

  }

  save() {
    this.customerService
    .createCustomer(this.customer).subscribe(data => {
      console.log(data)
      this.customer = new Customer(2,'raj',25,'savings','nellore',false);//empty
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
