import { Component, Inject } from '@angular/core';
import { EventserviceService } from '../../eventservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-event-dialog-delete',
  templateUrl: './event-dialog-delete.component.html',
  styleUrls: ['./event-dialog-delete.component.css']
})
export class EventDialogDeleteComponent {
  constructor( private service:EventserviceService,@Inject( MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {

  }

  deleteEvent(){
    this.service.deleteEvent(this.data.EventId).subscribe()
  }
}
