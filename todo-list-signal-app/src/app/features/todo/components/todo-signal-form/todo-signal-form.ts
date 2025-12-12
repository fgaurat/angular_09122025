import { Component, inject, signal } from '@angular/core';
import { Todo } from '../../entities/todo';
import { form, Field, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TodoStore } from '../../store/todo-store';

@Component({
  selector: 'app-todo-signal-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    Field
],
  templateUrl: './todo-signal-form.html',
  styleUrl: './todo-signal-form.css',
})
export class TodoSignalForm {

  todoStore = inject(TodoStore)
  readonly todoModel = signal<Todo>({
    title: '',
    completed: false,
  });

  readonly todoForm = form(this.todoModel,(schemaPath)=>{
      required(schemaPath.title);
  });

  submitTodo(event:Event) {
    event.preventDefault()
    console.log(this.todoForm().value());
    this.todoStore.addTodo(this.todoForm().value() as Todo)
  }
}
