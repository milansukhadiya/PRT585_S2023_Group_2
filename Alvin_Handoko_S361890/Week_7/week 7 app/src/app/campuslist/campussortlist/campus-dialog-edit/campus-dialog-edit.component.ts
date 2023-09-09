import { Component, Inject } from '@angular/core';
import { CampusserviceService } from '../../campusservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-campus-dialog-edit',
  templateUrl: './campus-dialog-edit.component.html',
  styleUrls: ['./campus-dialog-edit.component.css']
})
export class CampusDialogEditComponent {
  Campus! : FormGroup;
  constructor(private service :CampusserviceService ,@Inject( MAT_DIALOG_DATA) public data:any, private formBuilder : FormBuilder){}
  
  
  ngOnInit():void{
    this.Campus = this.formBuilder.group({
      CampusId:[this.data.CampusId],
      CampusName: ['', Validators.required],
      CampusAddress: ['', Validators.required],
    })
    this.Campus.controls['CampusName'].setValue(this.data.CampusName);
    this.Campus.controls['CampusAddress'].setValue(this.data.CampusAddress);
  }

  updateCampus(){
    this.service.putCampus(this.Campus.value).subscribe()

  }
}
