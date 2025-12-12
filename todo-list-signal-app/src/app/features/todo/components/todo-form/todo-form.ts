import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../../entities/todo';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { MessageQueue } from '../../../../core/services/message-queue';
import { Actions } from '../../../../core/enums/actions';
import { TodoStore } from '../../store/todo-store';

@Component({
  selector: 'app-todo-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    JsonPipe,
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  todoStore = inject(TodoStore)

  todoFormModel: Todo = {
    title: '',
    completed: true,
  };

  submitTodo() {
    console.log(this.todoFormModel);
    this.todoStore.addTodo(this.todoFormModel)
    // this.messageQueueService.dispatch({type:Actions.NEW_TODO,payload:this.todoFormModel})
    // this.todoService.save(this.todoFormModel)
    //     .subscribe(() => this.messageQueueService.dispatch({type:Actions.NEW_TODO}));
  }
}
