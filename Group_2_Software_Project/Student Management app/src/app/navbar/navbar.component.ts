import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser: string | undefined = '';

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser')?.toString();
  }
  logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
  }
}
