import { Component, Inject } from '@angular/core';
import { StudentserviceService } from '../../studentservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Classroom } from 'src/app/classroom';
import { ClassroomserviceService } from 'src/app/classroom/classroomservice.service';

@Component({
  selector: 'app-student-dialog-edit',
  templateUrl: './student-dialog-edit.component.html',
  styleUrls: ['./student-dialog-edit.component.css']
})
export class StudentDialogEditComponent {
  Student! : FormGroup;
  classroom:Classroom[]=[];
  constructor(private service:StudentserviceService ,@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder, private classroomserviceService : ClassroomserviceService){}
  
  
  ngOnInit():void{
  this.Student = this.formBuilder.group({
    StudentId:[this.data.StudentId],
    StudentName: [this.data.StudentName, Validators.required],
    ClassroomId: [this.data.ClassroomId, Validators.required],
  })
  //this.Student.controls['StudentName'].setValue(this.data.StudentName);
  this.getClassrooms();
  }

  updateStudent(){
    this.service.putStudent(this.Student.value).subscribe()

  }

  
  getClassrooms(){
    this.classroomserviceService.getClassrooms().subscribe((x) => {
      this.classroom = x;
    });
  }
}
