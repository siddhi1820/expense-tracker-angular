import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
      path:'login',
      loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
    }
    , {
      path:'home',
      loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
    }, {
      path:'acess-denied',
      loadChildren:()=>import('./acess-denied/acess-denied.module').then(m=>m.AcessDeniedModule)
    }, {
      path:'pageNotFound',
      loadChildren:()=>import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
