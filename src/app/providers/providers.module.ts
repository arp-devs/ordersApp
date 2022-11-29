import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProviderComponent } from './provider/provider.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProvidersListComponent,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    SharedModule
  ]
})
export class ProvidersModule { }
