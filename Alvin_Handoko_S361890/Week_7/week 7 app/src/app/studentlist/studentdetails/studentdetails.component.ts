import { Component, SimpleChanges } from '@angular/core';
import { SiblingServiceService } from 'src/app/sibling-service.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
 constructor(public studentData: SiblingServiceService){}
 data = this.studentData.studentData

}
