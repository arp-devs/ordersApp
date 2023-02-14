import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  item!: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe (
      switchMap(({id}) => this.itemService.getItemById(id))
    ).subscribe(item => {
      this.item = item
    })
  }

  volver() {
    this.router.navigate(['/items'])
  }
}
