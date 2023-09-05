import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {UserListService}from './user-list.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] = 
    [

  ];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','actions'];
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor(private userListService: UserListService,private dialog: MatDialog) { }

  createUser() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        mode: 'add' // 通过 'mode' 参数告诉对话框以编辑模式打开
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // 处理对话框关闭后的操作，如保存编辑后的数据
      this.getUserList()
    });
  }
  
editUser(user: User) {
  const dialogRef = this.dialog.open(UserDialogComponent, {
    data: {
      user,
      mode: 'edit' // 通过 'mode' 参数告诉对话框以编辑模式打开
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    // 处理对话框关闭后的操作，如保存编辑后的数据
    this.getUserList()
  });
}

  ngOnInit(): void {
    this.getUserList()
  }
 getUserList(){
  this.userListService.getGetUserList().subscribe(
    (data: any) => {
      this.users = data;
    },
    (error: any) => {
      this.users= 
      [
        { id: 12, name: 'DrNice',gender:'Male',email:'DrNice@gmail.com' },
        { id: 13, name: 'Bombasto',gender:'Male',email:'Bombasto@gmail.com' },
        { id: 14, name: 'Celeritas' ,gender:'Male',email:'Celeritas@gmail.com'},
        { id: 15, name: 'Magneta',gender:'Female',email:'Magneta@gmail.com' },
        { id: 16, name: 'RubberMan',gender:'Female',email:'RubberMan@gmail.com' },
        { id: 17, name: 'Dynama' ,gender:'Female',email:'Dynama@gmail.com'},
        { id: 18, name: 'DrIQ',gender:'Female',email:'DrIQ@gmail.com' },
        { id: 19, name: 'Magma',gender:'Female',email:'Magma@gmail.com' },
        { id: 20, name: 'Tornado',gender:'Female',email:'Tornado@gmail.com' }
    ];
      console.error(error);
    }
  );
 };
  onSubmit(form) {
    if (form.valid) {
      console.log('Form validation succeeded!', form.value);
    } else {
      console.log('Form validation failed!');
    }
  }


  
  deleteUser(user: User) {
    // 实现删除逻辑，可能需要确认删除操作
    this.userListService.delUser(user.id).subscribe(
      (data: any) => {
        this.getUserList();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
}
