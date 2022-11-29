import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ItemsListComponent
      },
      {
        path: ':id',
        component: ItemComponent
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
export class ItemsRoutingModule { }
