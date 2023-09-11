import { Component, Inject } from '@angular/core';
import { EventserviceService } from '../../eventservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-event-dialog-edit',
  templateUrl: './event-dialog-edit.component.html',
  styleUrls: ['./event-dialog-edit.component.css']
})
export class EventDialogEditComponent {
  Event! : FormGroup;
  constructor(private service :EventserviceService ,@Inject( MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder){}
  
  
  ngOnInit():void{
    this.Event = this.formBuilder.group({
      EventId:[this.data.EventId],
      EventName: ['', Validators.required],
      EventLocation: ['', Validators.required],
      EventDateTime: ['', Validators.required],
    })
    this.Event.controls['EventName'].setValue(this.data.EventName);
    this.Event.controls['EventLocation'].setValue(this.data.EventLocation);
    this.Event.controls['EventDateTime'].setValue(this.data.EventDateTime);
  }

  updateEvent(){
    this.service.putEvent(this.Event.value).subscribe()

  }
}
