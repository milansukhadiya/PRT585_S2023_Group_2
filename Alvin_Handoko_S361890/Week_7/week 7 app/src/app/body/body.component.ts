import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() opened = false;
  @Input() screenWidth = 0;
  getBodyClass():any{
    let styleClass = '';
    if(this.opened && this.screenWidth>768){
      styleClass = 'body-trimmed';
    } else if(this.opened && this.screenWidth <= 768 && this.screenWidth>0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
