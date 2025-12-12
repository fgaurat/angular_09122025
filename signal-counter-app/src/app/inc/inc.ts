import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CountSignal } from '../count-signal';

@Component({
  selector: 'app-inc',
  imports: [],
  templateUrl: './inc.html',
  styleUrl: './inc.css',
})
export class Inc {
  countSignalService = inject(CountSignal);

  inc(){
    this.countSignalService.inc()
  }
}
