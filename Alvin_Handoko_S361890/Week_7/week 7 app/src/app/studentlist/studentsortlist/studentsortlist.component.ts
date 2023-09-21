import { Component, ViewChild } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Student } from 'src/app/student';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDialogDeleteComponent } from './student-dialog-delete/student-dialog-delete.component';
import { StudentDialogEditComponent } from './student-dialog-edit/student-dialog-edit.component';
import { SiblingServiceService } from 'src/app/sibling-service.service';

@Component({
  selector: 'app-studentsortlist',
  templateUrl: './studentsortlist.component.html',
  styleUrls: ['./studentsortlist.component.css']
})
export class StudentsortlistComponent {
  data: any;
  searchValue = '';
  toggleAdd = true;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['StudentId', 'StudentName', 'StudentEmail', 'StudentGender', 'Action'];
  tableFilter() {
    this.data.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  toggle_add() {
    this.toggleAdd = !this.toggleAdd;
  }

  openDialogEdit(student:Student){

    this.matdialog.open(StudentDialogEditComponent, {width:'30%', data: {
      StudentId : student.StudentId,
      StudentName : student.StudentName,
      StudentEmail : student.StudentEmail,
      StudentGender : student.StudentGender
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
  }

  openDialogDelete(student:Student){
    this.matdialog.open(StudentDialogDeleteComponent, {width:'30%',data: {
      StudentId : student.StudentId,
      StudentName : student.StudentName,
      StudentEmail : student.StudentEmail,
      StudentGender : student.StudentGender
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: StudentserviceService,
    private matdialog: MatDialog,
    private sibling: SiblingServiceService
  ) {
    this.refresh()
  }
public refresh(){
  this.service.getStudents().subscribe((x) => {
    this.data = new MatTableDataSource<Student>(x);
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  });
}

studentdetail(data:any){
  this.sibling.studentData = data;
}
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
