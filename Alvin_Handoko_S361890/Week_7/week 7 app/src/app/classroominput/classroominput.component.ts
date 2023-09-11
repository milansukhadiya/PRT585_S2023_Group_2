import { Component } from '@angular/core';
import { ClassroomsortlistComponent } from '../classroom/classroomsortlist/classroomsortlist.component';
import { ClassroomserviceService } from '../classroom/classroomservice.service';
import { Classroom } from '../classroom';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-classroominput',
  templateUrl: './classroominput.component.html',
  styleUrls: ['./classroominput.component.css']
})
export class ClassroominputComponent {
  constructor(private classroomsortlist:ClassroomsortlistComponent,private service:ClassroomserviceService){};

  classroom: Classroom = {ClassroomId:0,ClassroomName:''};
  
  addClassroom(Classroomform: NgForm){
    this.service.postClassroom(this.classroom).subscribe((response)=>console.log(response));
    Classroomform.reset();
    this.classroomsortlist.refresh()
  }
}
