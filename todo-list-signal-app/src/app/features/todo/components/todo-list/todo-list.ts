import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, Signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { AsyncPipe } from '@angular/common';
import { Todo, Todos } from '../../entities/todo';
import { EMPTY, filter, map, merge, Observable, switchMap, tap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MessageQueue } from '../../../../core/services/message-queue';
import { Action } from '../../../../core/models/action';
import { Actions } from '../../../../core/enums/actions';
import { TodoStore } from '../../store/todo-store';

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe, MatTableModule, MatCheckboxModule, FormsModule, MatButtonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit{
  
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed', 'chkCompleted', 'actions'];
  todoStore = inject(TodoStore)
  
  todos:Signal<Todos> = this.todoStore.todos
  
  ngOnInit(): void {
    this.todoStore.loadTodos()
  }

  delete(todo: Todo) {
   this.todoStore.deleteTodo(todo)
  }

}
