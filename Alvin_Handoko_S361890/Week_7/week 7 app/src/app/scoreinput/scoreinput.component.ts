import { Component } from '@angular/core';
import { ScoresortlistComponent } from '../score/scoresortlist/scoresortlist.component';
import { ScoreserviceService } from '../score/scoreservice.service';
import { Score } from '../score';
import { NgForm } from '@angular/forms';
import { Unit } from '../unit';
import { Student } from '../student';
import { UnitServiceService } from '../unit-list/unit-service.service';
import { StudentserviceService } from '../studentlist/studentservice.service';

@Component({
  selector: 'app-scoreinput',
  templateUrl: './scoreinput.component.html',
  styleUrls: ['./scoreinput.component.css']
})
export class ScoreinputComponent {
  constructor(private scoresortlist:ScoresortlistComponent,private service:ScoreserviceService,private unitserviceService:UnitServiceService,private studentserviceService:StudentserviceService){};

  score: Score = {ScoreId:0,UnitId:0,StudentId:0,ScoreValue:0};
  unit:Unit[]=[];
  student:Student[]=[];
  selectedUnitId: number | undefined;
  selectedStudentId: number | undefined;
  ScoreValue: number | undefined;
  ngOnInit(): void {
    this.getUnits();
    this.getStudents();
}

  addScore(Scoreform: NgForm){
    this.score.UnitId=Number(this.selectedUnitId);
    this.score.StudentId=Number(this.selectedStudentId);
    this.score.ScoreValue=Number(this.ScoreValue);
    this.service.postScore(this.score).subscribe((response)=>console.log(response));
    Scoreform.reset();
    this.scoresortlist.refresh()
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
