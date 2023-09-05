import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import {MovieListService}from './movie-list.service';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:Movie[] = 
    [

  ];
  displayedColumns: string[] = ['id', 'name', 'releaseDate', 'director', 'emailAddress', 'language', 'category','actions'];
  selected?: Movie;
  onSelect(movie: Movie): void {
    this.selected = movie;
  }
  constructor(private movieListService: MovieListService,private dialog: MatDialog) { }
  search(){
    this.getList();
  }
  create() {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width:'500px',
      data: {
       
        mode: 'add' // 通过 'mode' 参数告诉对话框以编辑模式打开
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // 处理对话框关闭后的操作，如保存编辑后的数据
      this.getList()
    });
  }
  
edit(movie: Movie) {
 
  const dialogRef = this.dialog.open(MovieDialogComponent, {
    width:'500px',
    data: {
      movie,
      mode: 'edit' // 通过 'mode' 参数告诉对话框以编辑模式打开
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    // 处理对话框关闭后的操作，如保存编辑后的数据
    this.getList()
  });
}

  ngOnInit(): void {
    //this.getList()
  }
 getList(){
  this.movieListService.getGetList().subscribe(
    (data: any) => {
      this.movies = data;
    },
    (error: any) => {
      
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


  
  delete(obj: Movie) {
    // 实现删除逻辑，可能需要确认删除操作
    this.movieListService.del(obj.id).subscribe(
      (data: any) => {
        this.getList();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
}
