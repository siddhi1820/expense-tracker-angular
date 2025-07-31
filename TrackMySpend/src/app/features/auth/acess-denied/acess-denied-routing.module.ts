import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessDeniedComponent } from './component/acess-denied/acess-denied.component';

const routes: Routes = [
  {path:'',component:AcessDeniedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessDeniedRoutingModule { }
