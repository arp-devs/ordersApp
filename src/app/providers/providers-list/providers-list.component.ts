import { Component, OnInit } from '@angular/core';
import { Provider } from '../interfaces/provider.interface';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styles: [
    `
      td {
        cursor:pointer;
      }
    `
  ]
})
export class ProvidersListComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getProviders()
      .subscribe(resp => {
        this.providers = resp
      });
  }

}
