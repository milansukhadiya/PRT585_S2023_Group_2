import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
//   data: any;
//   searchValue = '';
//   toggleAdd = true;
//   @ViewChild(MatSort) sort!: MatSort;
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   displayedColumns: string[] = ['ClassroomId', 'ClassroomName', 'Action'];
//   tableFilter() {
//     this.data.filter = this.searchValue.trim().toLocaleLowerCase();
//   }

//   toggle_add() {
//     this.toggleAdd = !this.toggleAdd;
//   }

//   openDialogEdit(enrollment:Enrollment){

//     this.matdialog.open(ClassroomDialogEditComponent, {width:'30%', data: {
//       ClassroomId : classroom.ClassroomId,
//       ClassroomName : classroom.ClassroomName,
//     }});
//     this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
    
//   }

//   openDialogDelete(classroom:Classroom){
//     this.matdialog.open(ClassroomDialogDeleteComponent, {width:'30%',data: {
//       ClassroomId : classroom.ClassroomId,
//       ClassroomName : classroom.ClassroomName
//     }});
//     this.matdialog.afterAllClosed.subscribe((res)=>this.refresh())
//   }

//   constructor(
//     private _liveAnnouncer: LiveAnnouncer,
//     private service: ClassroomserviceService,
//     private matdialog: MatDialog
//   ) {
//     this.refresh()
//   }
// public refresh(){
//   this.service.getClassrooms().subscribe((x) => {
//     this.data = new MatTableDataSource<Classroom>(x);
//     this.data.sort = this.sort;
//     this.data.paginator = this.paginator;
//   });
// }
//   /** Announce the change in sort state for assistive technology. */
//   announceSortChange(sortState: Sort) {
//     // This example uses English messages. If your application supports
//     // multiple language, you would internationalize these strings.
//     // Furthermore, you can customize the message to add additional
//     // details about the values being sorted.
//     if (sortState.direction) {
//       this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
//     } else {
//       this._liveAnnouncer.announce('Sorting cleared');
//     }
//   }
}
