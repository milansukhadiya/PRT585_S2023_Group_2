import { Component, Inject } from '@angular/core';
import { CampusserviceService } from '../../campusservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-campus-dialog-delete',
  templateUrl: './campus-dialog-delete.component.html',
  styleUrls: ['./campus-dialog-delete.component.css']
})
export class CampusDialogDeleteComponent {
  constructor( private service:CampusserviceService,@Inject( MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {

  }

  deleteCampus(){
    this.service.deleteCampus(this.data.CampusId).subscribe()
  }
}
