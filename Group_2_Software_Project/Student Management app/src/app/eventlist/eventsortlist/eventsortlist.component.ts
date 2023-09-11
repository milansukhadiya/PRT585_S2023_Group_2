import { Component, ViewChild } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { Event } from 'src/app/event';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventDialogDeleteComponent } from './event-dialog-delete/event-dialog-delete.component';
import { EventDialogEditComponent } from './event-dialog-edit/event-dialog-edit.component';

@Component({
  selector: 'app-eventsortlist',
  templateUrl: './eventsortlist.component.html',
  styleUrls: ['./eventsortlist.component.css']
})
export class EventsortlistComponent {
  data: any;
  searchValue = '';
  toggleAdd = true;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['EventId', 'EventName', 'EventLocation','EventDateTime', 'Action'];
  tableFilter() {
    this.data.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  toggle_add() {
    this.toggleAdd = !this.toggleAdd;
  }

  openDialogEdit(event:Event){

    this.matdialog.open(EventDialogEditComponent, {width:'30%', data: {
      EventId : event.EventId,
      EventName : event.EventName,
      EventLocation : event.EventLocation,
      EventDateTime : event.EventDateTime
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
  }

  openDialogDelete(event:Event){
    this.matdialog.open(EventDialogDeleteComponent, {width:'30%',data: {
      EventId : event.EventId,
      EventName : event.EventName,
      EventLocation : event.EventLocation,
      EventDateTime : event.EventDateTime
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: EventserviceService,
    private matdialog: MatDialog
  ) {
    this.refresh()
  }
public refresh(){
  this.service.getEvents().subscribe((x) => {
    this.data = new MatTableDataSource<Event>(x);
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  });
}
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
