import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { UnitServiceService } from '../../unit-service.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit{ 
Unit! : FormGroup;
  constructor(private service:UnitServiceService ,@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder){}
  
  
  ngOnInit():void{
  this.Unit = this.formBuilder.group({
    UnitId:[this.data.UnitId],
    UnitName: ['', Validators.required],
    UnitCode: ['',Validators.required]
  })
  this.Unit.controls['UnitName'].setValue(this.data.UnitName);
  this.Unit.controls['UnitCode'].setValue(this.data.UnitCode);
  }

  updateUnit(){
    this.service.putUnit(this.Unit.value).subscribe()

  }
}

