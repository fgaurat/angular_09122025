import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoStore } from '../../store/todo-store';
import { Todo } from '../../entities/todo';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-reactive-form.html',
  styleUrl: './todo-reactive-form.css',
})
export class TodoReactiveForm {
  todoStore = inject(TodoStore);

  private formBuilder = inject(FormBuilder);
  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    completed: [false],
  });

  submitTodo() {
    console.log(this.todoForm.value);
    this.todoStore.addTodo(this.todoForm.value as Todo);
  }
}
