import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  add(a:number,b:number){
    return a+b
  }
}
