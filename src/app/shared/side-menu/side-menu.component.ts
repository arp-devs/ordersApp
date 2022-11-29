import { Component } from '@angular/core';

interface MenuItem {
  name: string,
  route: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SideMenuComponent {

  mainMenu: MenuItem[] = [
    {
      name: 'Providers',
      route: './providers'
    },
    {
      name: 'Items',
      route: './items'
    },
    {
      name: 'Orders',
      route: './orders'
    }
  ]

  constructor() { }


}
