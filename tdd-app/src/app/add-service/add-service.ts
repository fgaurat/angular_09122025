import { Component, inject } from '@angular/core';
import { AddService as SumService} from '../add-service';
@Component({
  selector: 'app-add-service',
  imports: [],
  templateUrl: './add-service.html',
  styleUrl: './add-service.css',
})
export class AddService {
  addService = inject(SumService)
  val1 = 0
  val2 = 0
  result = 0

  sum(){
    this.result = this.addService.add(this.val1,this.val2)
  }
}
