import { Component, Inject } from '@angular/core';
import { ClassroomserviceService } from '../../classroomservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-classroom-dialog-edit',
  templateUrl: './classroom-dialog-edit.component.html',
  styleUrls: ['./classroom-dialog-edit.component.css']
})
export class ClassroomDialogEditComponent {
  Classroom! : FormGroup;
  constructor(private service:ClassroomserviceService ,@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder){}
  
  
  ngOnInit():void{
  this.Classroom = this.formBuilder.group({
    ClassroomId:[this.data.ClassroomId],
    ClassroomName: ['', Validators.required],
  })
  this.Classroom.controls['ClassroomName'].setValue(this.data.ClassroomName);
  }

  updateClassroom(){
    this.service.putClassroom(this.Classroom.value).subscribe()

  }
}
