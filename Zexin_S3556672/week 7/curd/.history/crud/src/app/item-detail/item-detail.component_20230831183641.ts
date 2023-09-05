import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  itemId!: number;
  item: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      this.loadItem();
    });
  }

  loadItem(): void {
    this.apiService.getItem(this.itemId).subscribe(item => {
      this.item = item;
    });
  }
}
