import { Component } from '@angular/core';
import { StudentsortlistComponent } from '../studentlist/studentsortlist/studentsortlist.component';
import { StudentserviceService } from '../studentlist/studentservice.service';
import { Student } from '../student';
import { NgForm } from '@angular/forms';
import { Classroom } from '../classroom';
import { ClassroomserviceService } from '../classroom/classroomservice.service';

@Component({
  selector: 'app-studentinput',
  templateUrl: './studentinput.component.html',
  styleUrls: ['./studentinput.component.css']
})
export class StudentinputComponent {
  constructor(private studentsortlist:StudentsortlistComponent,private service:StudentserviceService,private classroomserviceService:ClassroomserviceService){};

  student: Student = {StudentId:0,StudentName:'',ClassroomId:0};
  classroom:Classroom[]=[];
  selectedClassroomId: number | undefined;
  ngOnInit(): void {
      this.getClassrooms();
  }

  addStudent(Studentform: NgForm){ 
    this.student.ClassroomId=Number(this.selectedClassroomId);
    this.service.postStudent(this.student).subscribe((response)=>console.log(response));
    Studentform.reset();
    this.studentsortlist.refresh()
  }

  getClassrooms(){
    this.classroomserviceService.getClassrooms().subscribe((x) => {
      this.classroom = x;
    });
  }
  
}
