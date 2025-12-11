import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo, Todos } from '../entities/todo';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private http:HttpClient = inject(HttpClient)

  findAll():Observable<Todos>{
    return this.http.get<Todos>(environment.url_todos);
  }

  delete(todo:Todo):Observable<void>{
    const url = `${environment.url_todos}/${todo.id}`
    return this.http.delete<void>(url);
  }

  save(todo:Todo):Observable<Todo>{

    return this.http.post<Todo>(environment.url_todos,todo,this.httpOptions);
  }

}
