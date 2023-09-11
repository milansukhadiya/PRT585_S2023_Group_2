import { Component, ViewChild } from '@angular/core';
import { CampusserviceService } from '../campusservice.service';
import { Campus } from 'src/app/campus';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CampusDialogDeleteComponent } from './campus-dialog-delete/campus-dialog-delete.component';
import { CampusDialogEditComponent } from './campus-dialog-edit/campus-dialog-edit.component';

@Component({
  selector: 'app-campussortlist',
  templateUrl: './campussortlist.component.html',
  styleUrls: ['./campussortlist.component.css']
})
export class CampussortlistComponent {
  data: any;
  searchValue = '';
  toggleAdd = true;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['CampusId', 'CampusName', 'CampusAddress', 'Action'];
  tableFilter() {
    this.data.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  toggle_add() {
    this.toggleAdd = !this.toggleAdd;
  }

  openDialogEdit(campus:Campus){

    this.matdialog.open(CampusDialogEditComponent, {width:'30%', data: {
      CampusId : campus.CampusId,
      CampusName : campus.CampusName,
      CampusAddress : campus.CampusAddress
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
  }

  openDialogDelete(campus:Campus){
    this.matdialog.open(CampusDialogDeleteComponent, {width:'30%',data: {
      CampusId : campus.CampusId,
      CampusName : campus.CampusName,
      CampusAddress : campus.CampusAddress
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: CampusserviceService,
    private matdialog: MatDialog
  ) {
    this.refresh()
  }
public refresh(){
  this.service.getCampuses().subscribe((x) => {
    this.data = new MatTableDataSource<Campus>(x);
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
