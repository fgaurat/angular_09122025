import { inject, Injectable, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo, Todos } from '../entities/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  todoListService = inject(TodoService);

  private data = signal<Todos>([]);
  readonly todos = this.data.asReadonly();

  loadTodos() {
    this.todoListService.findAll().subscribe((result) => {
      this.data.set(result);
    });
  }

  deleteTodo(todo: Todo) {
    this.todoListService.delete(todo).subscribe(() => {
      this.data.update(todos => todos.filter(currentTodo => currentTodo.id !== todo.id))

    });
  }

  addTodo(todo: Todo) {
    this.todoListService.save(todo).subscribe(savedTodo=> this.data.update(todos => [...todos,savedTodo]))
  }
}
