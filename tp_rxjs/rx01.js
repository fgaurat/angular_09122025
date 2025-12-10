import {interval,map,take,tap} from 'rxjs';


// interval(500).pipe(
//     take(3),
//     tap(r=>console.log("avant",r)),
//     map(v=>v*10 ),
//     tap(r=>console.log("après",r)),
//     tap(console.log),
// ).subscribe(value => console.log(value))

// let obs$ =interval(500)
// obs$.pipe(
//     take(3),
//     tap(r=>console.log("avant",r)),
//     map(v=>v*10 ),
//     tap(r=>console.log("après",r)),
//     tap(console.log),
// ).subscribe(value => console.log(value))


//cold obervable
let obs$ =interval(500).pipe(
    take(3),
    //tap(r=>console.log("avant",r)),
    map(v=>v*10 ),
    //tap(r=>console.log("après",r)),
    //tap(console.log),
)

obs$.subscribe(value => console.log("subscribe 1",value))
obs$.subscribe(value => console.log("subscribe 2",value))

setTimeout(()=>{
obs$.subscribe(value => console.log("subscribe 3",value))
},1000)



