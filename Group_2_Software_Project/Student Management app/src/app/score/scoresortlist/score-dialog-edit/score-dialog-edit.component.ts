import { Component, Inject } from '@angular/core';
import { ScoreserviceService } from '../../scoreservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnitServiceService } from 'src/app/unit-list/unit-service.service';
import { StudentserviceService } from 'src/app/studentlist/studentservice.service';
import { Unit } from 'src/app/unit';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-score-dialog-edit',
  templateUrl: './score-dialog-edit.component.html',
  styleUrls: ['./score-dialog-edit.component.css']
})
export class ScoreDialogEditComponent {
  Score! : FormGroup;
  constructor(private service:ScoreserviceService ,@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder
  , private unitserviceService : UnitServiceService, private studentserviceService : StudentserviceService){}
  
  unit:Unit[]=[];
  student:Student[]=[];
  ngOnInit():void{
  this.Score = this.formBuilder.group({
    ScoreId:[this.data.ScoreId],
    UnitId: [this.data.UnitId, Validators.required],
    StudentId: [this.data.StudentId, Validators.required],
    ScoreValue: [this.data.ScoreValue, Validators.required],
  })
  this.getUnits();
  this.getStudents();
  
  }

  updateScore(){
    this.service.putScore(this.Score.value).subscribe()

  }

  getUnits(){
    this.unitserviceService.getUnits().subscribe((x) => {
      this.unit = x;
    });
  }

  getStudents(){
    this.studentserviceService.getStudents().subscribe((x) => {
      this.student = x;
    });
  }

}
