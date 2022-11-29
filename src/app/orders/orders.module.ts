import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    OrdersListComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
