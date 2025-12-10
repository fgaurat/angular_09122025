import { Component } from '@angular/core';
import { TodoList } from "../../features/todo/components/todo-list/todo-list";

@Component({
  selector: 'app-todo-dashboard',
  imports: [TodoList],
  templateUrl: './todo-dashboard.html',
  styleUrl: './todo-dashboard.css',
})
export class TodoDashboard {

}
