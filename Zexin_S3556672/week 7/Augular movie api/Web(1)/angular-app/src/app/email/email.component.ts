import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
  email:string ="";
  message:string ="";
  title:string="";
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }
  onSubmit(form) {
    if (form.valid) {
      
      this.emailService.sendEmail(form.value).subscribe(
        (data: any) => {
          console.log(data, form.value);
        },
        (error: any) => {
         
          console.error(error);
        }
      );
    } else {
      console.log('Form validation failed!');
    }
  }
}
