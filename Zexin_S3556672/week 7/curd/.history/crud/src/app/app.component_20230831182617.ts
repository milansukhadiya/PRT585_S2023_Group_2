import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getItems().subscribe((items: any[]) => {
      this.items = items;
    });
  }

}
