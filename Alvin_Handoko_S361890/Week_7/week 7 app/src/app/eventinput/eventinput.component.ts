import { Component } from '@angular/core';
import { EventsortlistComponent } from '../eventlist/eventsortlist/eventsortlist.component';
import { EventserviceService } from '../eventlist/eventservice.service';
import { Event } from '../event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eventinput',
  templateUrl: './eventinput.component.html',
  styleUrls: ['./eventinput.component.css'],
})

export class EventinputComponent {
  constructor(private eventsortlist:EventsortlistComponent,private service:EventserviceService){};

  event: Event = {EventId:0,EventName:'',EventLocation:'',EventDateTime:''};
  
  addEvent(Eventform: NgForm){
    this.service.postEvent(this.event).subscribe((response)=>console.log(response));
    Eventform.reset();
    this.eventsortlist.refresh()
  }
}
