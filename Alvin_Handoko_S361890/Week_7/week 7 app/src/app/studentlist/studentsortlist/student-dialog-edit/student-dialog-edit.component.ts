import { Component, Inject } from '@angular/core';
import { StudentserviceService } from '../../studentservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog-edit',
  templateUrl: './student-dialog-edit.component.html',
  styleUrls: ['./student-dialog-edit.component.css']
})
export class StudentDialogEditComponent {
  Student! : FormGroup;
  constructor(private service:StudentserviceService ,@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder){}
  
  
  ngOnInit():void{
  this.Student = this.formBuilder.group({
    StudentId:[this.data.StudentId],
    StudentName: ['', Validators.required],
    StudentEmail: ['', Validators.required],
    StudentGender: ['', Validators.required],
  })
  this.Student.controls['StudentName'].setValue(this.data.StudentName);
  this.Student.controls['StudentEmail'].setValue(this.data.StudentEmail);
  this.Student.controls['StudentGender'].setValue(this.data.StudentGender);
  }

  updateStudent(){
    this.service.putStudent(this.Student.value).subscribe()

  }
}
