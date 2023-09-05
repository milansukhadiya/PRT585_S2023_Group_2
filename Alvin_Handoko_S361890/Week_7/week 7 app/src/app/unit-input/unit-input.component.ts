import { Component } from '@angular/core';
import { Unit } from '../unit';
import {NgForm} from '@angular/forms'
import { UnitServiceService } from '../unit-list/unit-service.service';
import { SortlistComponent } from '../unit-list/sortlist/sortlist.component';


@Component({
  selector: 'app-unit-input',
  templateUrl: './unit-input.component.html',
  styleUrls: ['./unit-input.component.css']
})
export class UnitInputComponent {
 constructor(private sortlist:SortlistComponent,private service:UnitServiceService){};

unit: Unit = {UnitId:0,UnitName:'', UnitCode: ''};

addUnit(unitform: NgForm){
  this.service.postUnit(this.unit).subscribe((response)=>console.log(response));
  unitform.reset();
  this.sortlist.refresh()
}
}


