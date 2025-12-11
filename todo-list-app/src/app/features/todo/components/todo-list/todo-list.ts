import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe, MatTableModule, MatCheckboxModule, FormsModule, MatButtonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList /*implements AfterViewInit*/{

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  messageQueueService: MessageQueue = inject(MessageQueue);
  
  todoService: TodoService = inject(TodoService);
  // todos$ = this.todoService.findAll().pipe(
  //   map((t:Todos) => t.map((todo:Todo) => ({...todo,title:todo.title.toUpperCase()}) )
  // ))
  // todos$ = this.todoService.findAll();
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed', 'chkCompleted', 'actions'];
  todos$:Observable<Todos> = EMPTY

  constructor(){
    const delete$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type === Actions.DELETE_TODO),
      switchMap((action:Action) => this.todoService.delete(action.payload))
    )
    const add$= this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type === Actions.NEW_TODO),
      switchMap((action:Action) => this.todoService.save(action.payload))
    )
    const load$= this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type === Actions.LOAD_TODOS)
    )

    this.todos$ = merge(delete$,add$,load$).pipe(
      switchMap(()=>this.todoService.findAll())
    )


  }


  delete(todo: Todo) {
    // console.log(todo)
    // moche
    // this.todoService.delete(todo).subscribe( r =>{
    //   this.todos$ = this.todoService.findAll();
    //   this.changeDetectorRef.markForCheck()
    // })
  
    // moins moche
    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap(() => this.todoService.findAll()),
    // )
    this.messageQueueService.dispatch({type:Actions.DELETE_TODO,payload:todo})
  }

  ngAfterViewInit(){
      // this.todos$ = this.todoService.findAll();
      this.messageQueueService.dispatch({type:Actions.LOAD_TODOS})
  }
}
