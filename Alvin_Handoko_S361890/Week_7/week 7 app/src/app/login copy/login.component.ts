import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';
  loginStatus: string = ''
  constructor(private service: LoginService, private router: Router) { }
  ngOnInit(): void {
   
    
  }
  ngAfterViewInit() {
    let currentUser = localStorage.getItem('currentUser')?.toString();
    if(currentUser!=null){
      this.router.navigate(['/units']);
    }
  }
  login() {
    this.service.login(this.userName, this.password).subscribe((x) => {
      this.loginStatus = x.toString();
      if (this.loginStatus == 'success') {
        localStorage.setItem('currentUser', this.userName);
        window.location.reload();

      }
      else {
        {
          localStorage.removeItem('currentUser');
          window.location.reload();
        }
      }

    });
  }
}
