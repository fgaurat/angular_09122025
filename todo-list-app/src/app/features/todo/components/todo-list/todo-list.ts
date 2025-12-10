import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { AsyncPipe } from '@angular/common';
import { Todo, Todos } from '../../entities/todo';
import { map } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe,MatTableModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList{

  todoService:TodoService = inject(TodoService)
  todos$ = this.todoService.findAll().pipe(
    map((t:Todos) => t.map((todo:Todo) => ({...todo,title:todo.title.toUpperCase()}) )
  ))
  displayedColumns:string[] = ['id']

}
