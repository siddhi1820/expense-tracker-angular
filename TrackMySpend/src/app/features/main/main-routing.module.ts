import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'category',loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)},
  {path:'expense',loadChildren:()=>import('./expense/expense.module').then(m=>m.ExpenseModule)},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
