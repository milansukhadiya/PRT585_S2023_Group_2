import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnitServiceService } from '../../unit-service.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit{


  constructor( private service:UnitServiceService,@Inject( MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {

  }

  deleteUnit(){
    this.service.deleteUnit(this.data.UnitId).subscribe()
  }
}
