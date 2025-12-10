import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todos } from '../entities/todo';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  
  private http:HttpClient = inject(HttpClient)

  findAll():Observable<Todos>{
    return this.http.get<Todos>(environment.url_todos);
  }

}
