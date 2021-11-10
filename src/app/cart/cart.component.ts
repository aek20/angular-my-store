import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item:any
  constructor(private data :DataService) { }
addPrice(price:any){
this.data.setPrice(price)
}
  ngOnInit(): void {
   this.item= this.data.getItem()
this.data.setCartItems(this.item)

  }

}
