import { Component, Inject } from '@angular/core';
import { ScoreserviceService } from '../../scoreservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-score-dialog-delete',
  templateUrl: './score-dialog-delete.component.html',
  styleUrls: ['./score-dialog-delete.component.css']
})
export class ScoreDialogDeleteComponent {
  constructor( private service:ScoreserviceService,@Inject( MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {

  }

  deleteScore(){
    this.service.deleteScore(this.data.ScoreId).subscribe()
  }
}
