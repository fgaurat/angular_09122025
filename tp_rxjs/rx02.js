import {interval,map,take,share} from 'rxjs';

let obs$ =interval(500).pipe(
    take(3),
    map(v=>v*10 ),
    share()//hot obervable
)

obs$.subscribe(value => console.log("subscribe 1",value))
obs$.subscribe(value => console.log("subscribe 2",value))

setTimeout(()=>{
obs$.subscribe(value => console.log("subscribe 3",value))
},1000)