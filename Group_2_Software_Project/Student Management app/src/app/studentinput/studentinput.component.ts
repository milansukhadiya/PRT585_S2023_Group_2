import { Component } from '@angular/core';
import { StudentsortlistComponent } from '../studentlist/studentsortlist/studentsortlist.component';
import { StudentserviceService } from '../studentlist/studentservice.service';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentinput',
  templateUrl: './studentinput.component.html',
  styleUrls: ['./studentinput.component.css']
})
export class StudentinputComponent {
  constructor(private studentsortlist:StudentsortlistComponent,private service:StudentserviceService){};

  student: Student = {StudentId:0,StudentName:''};
  
  addStudent(Studentform: NgForm){
    this.service.postStudent(this.student).subscribe((response)=>console.log(response));
    Studentform.reset();
    this.studentsortlist.refresh()
  }
}
