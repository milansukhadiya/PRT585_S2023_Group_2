import { Component, ViewChild } from '@angular/core';
import { EnrollmentList, EnrollmentString } from '../enrollment';
import { EnrollmentDialogEditComponent } from './enrollment-dialog-edit/enrollment-dialog-edit.component';
import { EnrollmentService } from './enrollment.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnrollmentDialogDeleteComponent } from './enrollment-dialog-delete/enrollment-dialog-delete.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
  data: any;
  searchValue = '';
  toggleAdd = true;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['EnrollmentId', 'StudentId','UnitIds', 'Action'];
  tableFilter() {
    this.data.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  toggle_add() {
    this.toggleAdd = !this.toggleAdd;
  }

  openDialogEdit(enrollment:EnrollmentList){

    this.matdialog.open(EnrollmentDialogEditComponent, {width:'30%', data: {
      StudentId : enrollment.StudentId,
      UnitIds : enrollment.UnitIds,
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
  }

  openDialogDelete(enrollment:EnrollmentList){
    this.matdialog.open(EnrollmentDialogDeleteComponent, {width:'30%',data: {
      EnrollmentId : enrollment.EnrollmentId,
      StudentId : enrollment.StudentId,
      UnitIds : enrollment.UnitIds,
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: EnrollmentService,
    private matdialog: MatDialog
  ) {
    this.refresh()
  }
public refresh(){
  this.service.getEnrollments().subscribe((x) => {
    this.data = new MatTableDataSource<EnrollmentString>(x);
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  });
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
