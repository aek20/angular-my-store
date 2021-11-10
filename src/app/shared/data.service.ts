import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
item :any
cartItems:any[] = [];
total_price=0
constructor() { }
setItem(data:any){
this.item=data;
console.log("jyyjtjttjy"+this.item);
}

getItem(){
  console.log("get data"+this.item);
  return this.item
}

setCartItems(data:any){
this.cartItems.push(data);
this.setPrice(data.price);

}

setPrice(price:number){
  this.total_price+=price;
  console.log("total price is :"+this.total_price);
}

getPrice(){
  return this.total_price;
}

getCartItems(){
  console.log(this.cartItems)
  return this.cartItems;
}
}
