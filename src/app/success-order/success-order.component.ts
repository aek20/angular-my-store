import { Component, OnInit } from '@angular/core';
import { DataService } from './../shared/data.service';
@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements OnInit {

  constructor( private data :DataService) { }
getTotalPrice(){
  return this.data.getPrice();
}
  ngOnInit(): void {
  }

}
