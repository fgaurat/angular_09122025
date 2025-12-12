import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-03',
  imports: [],
  templateUrl: './page-03.html',
  styleUrl: './page-03.css',
})
export class Page03 {
    // route: ActivatedRoute = inject(ActivatedRoute);
    // firstName = this.route.snapshot.params['firstName'];
    @Input()
    firstName:string="";
    

    private http:HttpClient = inject(HttpClient)

    
    ngOnInit(){
      this.http.get('http://localhost:3000/todos').subscribe()
    }


}
