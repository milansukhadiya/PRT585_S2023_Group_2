import { Component } from '@angular/core';
import { SideNavToogle } from './sidenavbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Student Management';

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToogleSideNav(data:SideNavToogle): void {
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.opened;
  }

}
