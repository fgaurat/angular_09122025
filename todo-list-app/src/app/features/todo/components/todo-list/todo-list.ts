import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { AsyncPipe } from '@angular/common';
import { Todo, Todos } from '../../entities/todo';
import { map } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe,MatTableModule,MatCheckboxModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList{

  todoService:TodoService = inject(TodoService)
  // todos$ = this.todoService.findAll().pipe(
  //   map((t:Todos) => t.map((todo:Todo) => ({...todo,title:todo.title.toUpperCase()}) )
  // ))
  todos$ = this.todoService.findAll()
  displayedColumns:string[] = ['id','userId','title','completed','chkCompleted']

}
