import { Component } from '@angular/core';
import { CampussortlistComponent } from '../campuslist/campussortlist/campussortlist.component';
import { CampusserviceService } from '../campuslist/campusservice.service';
import { Campus } from '../campus';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-campusinput',
  templateUrl: './campusinput.component.html',
  styleUrls: ['./campusinput.component.css']
})
export class CampusinputComponent {
  constructor(private campussortlist:CampussortlistComponent,private service:CampusserviceService){};

  campus: Campus = {CampusId:0,CampusName:'',CampusAddress:''};
  
  addCampus(Campusform: NgForm){
    this.service.postCampus(this.campus).subscribe((response)=>console.log(response));
    Campusform.reset();
    this.campussortlist.refresh()
  }
}
