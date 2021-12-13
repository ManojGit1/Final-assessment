import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from "./../customer.service";
import { Customer } from "./../customer";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: any;//number;
  customer: any;//Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer(2,'raj',25,'savings','nellore',false);//empty

    this.id = this.route.snapshot.params['id'];
    
    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer(0,'',0,'','',false);//2,'raj',25,'savings','nellore',false);//empty

        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCustomer();    
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
