import { Component, Inject } from '@angular/core';
import { ClassroomserviceService } from '../../classroomservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-classroom-dialog-delete',
  templateUrl: './classroom-dialog-delete.component.html',
  styleUrls: ['./classroom-dialog-delete.component.css']
})
export class ClassroomDialogDeleteComponent {
  constructor( private service:ClassroomserviceService,@Inject( MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {

  }

  deleteClassroom(){
    this.service.deleteClassroom(this.data.ClassroomId).subscribe()
  }
}
