import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../movie-list/movie';
import {MovieListService}from '../movie-list/movie-list.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  movieForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MovieDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: { movie: Movie, mode: 'add' | 'edit' },
    private movieListService:MovieListService
  ) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      id: [this.dialogData.movie ? this.dialogData.movie.id : 0, Validators.required],
      name: [this.dialogData.movie ? this.dialogData.movie.name : '', Validators.required],
      releaseDate: [this.dialogData.movie ? this.dialogData.movie.releaseDate : '', Validators.required],
      director: [this.dialogData.movie ? this.dialogData.movie.director : '', [Validators.required]],
      emailAddress: [this.dialogData.movie ? this.dialogData.movie.emailAddress : '', [Validators.required, Validators.email]],
      language: [this.dialogData.movie ? this.dialogData.movie.language : '', [Validators.required]],
      category: [this.dialogData.movie ? this.dialogData.movie.category : '', [Validators.required]],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.movieForm.valid) {
      // 获取表单数据
      const formData = this.movieForm.value;

      // 处理保存逻辑，根据 mode 区分添加和编辑操作
      if (this.dialogData.mode === 'add') {
        
        // 添加用户逻辑
        // 调用用户服务的添加用户方法，传递 formData
        this.movieListService.create(formData).subscribe(
          (data: any) => {
            
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else if (this.dialogData.mode === 'edit') {
        // 编辑用户逻辑
        // 调用用户服务的编辑用户方法，传递 formData 和当前用户的 ID
        this.movieListService.edit(this.dialogData.movie.id, formData).subscribe(
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
