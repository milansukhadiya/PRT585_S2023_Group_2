import {
  Component, ViewChild
} from '@angular/core';
import { Unit } from 'src/app/unit';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { UnitServiceService } from '../unit-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
@Component({
  selector: 'app-sortlist',
  templateUrl: './sortlist.component.html',
  styleUrls: ['./sortlist.component.css'],
})
export class SortlistComponent {
  data: any;
  searchValue = '';
  toggleAdd = true;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['UnitId', 'UnitName', 'UnitCode', 'Action'];
  tableFilter() {
    this.data.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  toggle_add() {
    this.toggleAdd = !this.toggleAdd;
  }

  openDialogEdit(unit:Unit){

    this.matdialog.open(DialogEditComponent, {width:'30%', data: {
      UnitId : unit.UnitId,
      UnitName : unit.UnitName,
      UnitCode : unit.UnitCode
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
  }

  openDialogDelete(unit:Unit){
    this.matdialog.open(DialogDeleteComponent, {width:'30%',data: {
      UnitId : unit.UnitId,
      UnitName : unit.UnitName,
      UnitCode : unit.UnitCode
    }});
    this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: UnitServiceService,
    private matdialog: MatDialog
  ) {
    this.refresh()
  }
public refresh(){
  this.service.getUnits().subscribe((x) => {
    this.data = new MatTableDataSource<Unit>(x);
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
