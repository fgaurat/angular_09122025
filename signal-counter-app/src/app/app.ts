import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Show } from "./show/show";
import { Inc } from "./inc/inc";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Show, Inc],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('signal-counter-app');
  readonly count: WritableSignal<number> = signal(0);
  readonly showCount = signal(false);

  readonly doubleCount: Signal<number> = computed(() => this.count() * 2);
  
  readonly conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  setTo12() {
    this.count.set(12);
  }
  inc() {
    this.count.update((value) => value + 1);
  }
  toggleShowCount(){
    this.showCount.update((value) => !value);
  }

  constructor(){
    effect(()=>{
      console.log('effect 01',this.count())
    })
    effect(()=>{
      console.log('effect 02',this.doubleCount())
    })

  }
}
