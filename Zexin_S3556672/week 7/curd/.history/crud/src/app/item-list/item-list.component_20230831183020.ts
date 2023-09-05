import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.apiService.getItems().subscribe(items => {
      this.items = items;
    });
  }
}
