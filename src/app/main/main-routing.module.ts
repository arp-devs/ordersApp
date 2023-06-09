import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'providers',
        loadChildren: () => import('../providers/providers.module')
          .then(m => m.ProvidersModule)
      },
      {
        path: 'items',
        loadChildren: () => import('../items/items.module')
          .then(m => m.ItemsModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module')
          .then(m => m.OrdersModule)
      }
    ]
  },
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
export class MainRoutingModule { }
