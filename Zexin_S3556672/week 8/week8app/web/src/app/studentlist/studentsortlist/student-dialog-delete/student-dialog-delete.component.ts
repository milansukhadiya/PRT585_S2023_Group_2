import { Component, Inject } from '@angular/core';
import { StudentserviceService } from '../../studentservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog-delete',
  templateUrl: './student-dialog-delete.component.html',
  styleUrls: ['./student-dialog-delete.component.css']
})
export class StudentDialogDeleteComponent {
  constructor( private service:StudentserviceService,@Inject( MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {

  }

  deleteStudent(){
    this.service.deleteStudent(this.data.StudentId).subscribe()
  }
}
