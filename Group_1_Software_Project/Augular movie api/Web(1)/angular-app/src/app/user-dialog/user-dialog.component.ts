import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user-list/user';
import {UserListService}from '../user-list/user-list.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: { user: User, mode: 'add' | 'edit' },
    private userListService:UserListService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [this.dialogData.user ? this.dialogData.user.id : 0, Validators.required],
      name: [this.dialogData.user ? this.dialogData.user.name : '', Validators.required],
      gender: [this.dialogData.user ? this.dialogData.user.gender : '', Validators.required],
      email: [this.dialogData.user ? this.dialogData.user.email : '', [Validators.required, Validators.email]]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.userForm.valid) {
      // 获取表单数据
      const formData = this.userForm.value;

      // 处理保存逻辑，根据 mode 区分添加和编辑操作
      if (this.dialogData.mode === 'add') {
        
        // 添加用户逻辑
        // 调用用户服务的添加用户方法，传递 formData
        this.userListService.createUser(formData).subscribe(
          (data: any) => {
            
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else if (this.dialogData.mode === 'edit') {
        // 编辑用户逻辑
        // 调用用户服务的编辑用户方法，传递 formData 和当前用户的 ID
        this.userListService.editUser(this.dialogData.user.id, formData).subscribe(
          (data: any) => {
            
          },
          (error: any) => {
            console.error(error);
          }
        );
      }

      // 关闭对话框并传递结果
      this.dialogRef.close('saved');
    }
  }

}
