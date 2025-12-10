import {interval,map,take,share,merge,tap, switchMap} from 'rxjs';


const obs1$ =interval(1000)


const obs2$ = obs1$.pipe(
    take(5),
    tap(i => console.log("avant",i)),
    switchMap(()=>{
        return interval(200).pipe(take(5))
    }),
    tap(i => console.log("\taprès",i)),
)

obs2$.subscribe()