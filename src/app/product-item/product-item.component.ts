import { Component, OnInit } from '@angular/core';
import { DataService } from './../shared/data.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 item:any
items:any[]=[]
  constructor(private data: DataService) {

   }
pushData=(item:any)=>{
this.items.push(item)
}
getTotalPrice=()=>{ 
let total= this.data.getPrice()/2;
return total;
}
  ngOnInit(): void {
this.items=this.data.getCartItems()

console.log(this.items)
console.log(this.items)
}

}
