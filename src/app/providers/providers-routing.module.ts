import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProvidersListComponent
      },
      {
        path: ':id',
        component: ProviderComponent
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
export class ProvidersRoutingModule { }
