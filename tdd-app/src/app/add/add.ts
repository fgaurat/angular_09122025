import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {

  val1 = 0
  val2 = 0
  result = 0

  sum(){
    this.result = Number(this.val1)+Number(this.val2)
  }


}
