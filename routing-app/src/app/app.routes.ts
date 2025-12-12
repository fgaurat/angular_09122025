import { Routes } from '@angular/router';
import { Page01 } from './pages/page-01/page-01';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Page02 } from './pages/page-02/page-02';
import { Page03 } from './pages/page-03/page-03';
import { page02GuardGuard } from './page02-guard-guard';

export const routes: Routes = [

    {path:"page01",component:Page01},
    // {path:"page02",component:Page02},
    {path:"page02",loadComponent:()=>import('./pages/page-02/page-02').then(c=>c.Page02)},
    {path:"page03/:firstName",component:Page03,canActivate:[page02GuardGuard]},

    {path:"",redirectTo:"/page01",pathMatch:"full"},
    {path:"**",component:PageNotFound}
];
