import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {UserListService}from './user-list.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] = 
    [

  ];
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.userListService.getGetUserList().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        this.users= 
        [
          { id: 12, name: 'DrNice',email:'DrNice@gmail.com' },
          { id: 13, name: 'Bombasto',email:'Bombasto@gmail.com' },
          { id: 14, name: 'Celeritas' ,email:'Celeritas@gmail.com'},
          { id: 15, name: 'Magneta',email:'Magneta@gmail.com' },
          { id: 16, name: 'RubberMan',email:'RubberMan@gmail.com' },
          { id: 17, name: 'Dynama' ,email:'Dynama@gmail.com'},
          { id: 18, name: 'DrIQ',email:'DrIQ@gmail.com' },
          { id: 19, name: 'Magma',email:'Magma@gmail.com' },
          { id: 20, name: 'Tornado',email:'Tornado@gmail.com' }
      ];
        console.error(error);
      }
    );
  }

  onSubmit(form) {
    if (form.valid) {
      console.log('Form validation succeeded!', form.value);
    } else {
      console.log('Form validation failed!');
    }
  }
}
