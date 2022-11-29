import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrdersListComponent
      },
      {
        path: ':id',
        component: OrderComponent
      },
      {
        path: '**',
        redirectTo: '/providers'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
