import { Component, ViewChild } from '@angular/core';
import { ScoreserviceService } from '../scoreservice.service';
import { Score } from 'src/app/score';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ScoreDialogDeleteComponent } from './score-dialog-delete/score-dialog-delete.component';
import { ScoreDialogEditComponent } from './score-dialog-edit/score-dialog-edit.component';
import { Unit } from 'src/app/unit';
import { Student } from 'src/app/student';
import { UnitServiceService } from 'src/app/unit-list/unit-service.service';
import { StudentserviceService } from 'src/app/studentlist/studentservice.service';

@Component({
  selector: 'app-scoresortlist',
  templateUrl: './scoresortlist.component.html',
  styleUrls: ['./scoresortlist.component.css']
})
export class ScoresortlistComponent {
  data: any;
  searchValue = '';
  toggleAdd = true;
  unit:Unit[]=[];
  student:Student[]=[];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['ScoreId', 'UnitId','StudentId','ScoreValue', 'Action'];
  tableFilter() {
    this.data.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  toggle_add() {
    this.toggleAdd = !this.toggleAdd;
  }

  openDialogEdit(score:Score){

    this.matdialog.open(ScoreDialogEditComponent, {width:'30%', data: {
      ScoreId : score.ScoreId,
      UnitId : score.UnitId,
      StudentId : score.StudentId,
      ScoreValue : score.ScoreValue,
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
  }

  openDialogDelete(score:Score){
    this.matdialog.open(ScoreDialogDeleteComponent, {width:'30%',data: {
      ScoreId : score.ScoreId,
      Unit : this.getUnitById(score.UnitId)?.UnitName,
      Student :this.getStudentById(score.StudentId)?.StudentName ,
      ScoreValue : score.ScoreValue,
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: ScoreserviceService,
    private matdialog: MatDialog,
    private unitserviceService: UnitServiceService,
    private studentserviceService: StudentserviceService
  ) {
    this.refresh()
  }
public refresh(){
  this.service.getScores().subscribe((x) => {
    this.data = new MatTableDataSource<Score>(x);
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  });

  this.getStudents();
  this.getUnits();
}
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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

  getUnitById(unitId: number): Unit | undefined {
    return this.unit.find(c => c.UnitId === unitId);
  }

  getStudentById(studentId: number): Student | undefined {
    return this.student.find(c => c.StudentId === studentId);
  }

}
