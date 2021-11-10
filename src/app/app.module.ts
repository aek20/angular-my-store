import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

import { ProductItemComponent } from './product-item/product-item.component';
import { DataService } from './shared/data.service';
import { SuccessOrderComponent } from './success-order/success-order.component';
// import { AppRoutingModule } from './app-routing.module';
const routes=[
{ path: 'cart', component: CartComponent },
{ path: '', component: CardsComponent },
{path: 'success', component:SuccessOrderComponent}
,{path:'products',component: ProductItemComponent}
    ]
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
  
    HeaderComponent,
       CartComponent,
       ProductItemComponent,
       SuccessOrderComponent
  ],
  imports: [
    BrowserModule
    , RouterModule.forRoot(routes),

    ],
  
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
// , [NgbPaginationModule, NgbAlertModule]