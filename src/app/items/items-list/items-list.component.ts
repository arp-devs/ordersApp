import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styles: [
    `
      td {
        cursor:pointer;
      }
    `
  ]
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(resp => {
      this.items = resp
    });
  }

}
