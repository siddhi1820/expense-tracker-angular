import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'auth',loadChildren:()=>import('./features/auth/auth.module').then(m=>m.AuthModule)},
    {path:'main',loadChildren:()=>import('./features/main/main.module').then(m=>m.MainModule)},
    {path:'',redirectTo:'auth/login',pathMatch:'full'},
    {path:'**',redirectTo:'auth/login'}
];
