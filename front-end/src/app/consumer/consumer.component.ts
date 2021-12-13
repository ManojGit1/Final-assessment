import { Observable } from "rxjs";
import { ConsumerService } from "./../consumer.service";
import { Customer } from "./../customer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  customers: any;//Observable<Employee[]>;

  constructor(private cunsumerService: ConsumerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.cunsumerService.getCustomersList();
  }


}
