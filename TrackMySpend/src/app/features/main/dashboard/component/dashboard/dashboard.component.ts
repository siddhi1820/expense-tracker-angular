import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ExpenseComponent } from '../../../expense/component/expense/expense.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../../../auth/home/component/home/home.component';
import { CategoryComponent } from '../../../category/component/category/category.component';
import { ViewExpenseComponent } from '../../../expense/component/view/view-expense.component';
import { TrackExpenseComponent } from '../../../expense/component/track/track-expense.component';
@Component({
  selector: 'app-dashboard',
  imports: [NgChartsModule,MatIconModule,ExpenseComponent,CommonModule,CategoryComponent,ViewExpenseComponent,TrackExpenseComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router){}
  message:any=localStorage.getItem('userName');
 currentSection = 'home';

  showSection(section: string) {
    this.currentSection=section
    if(section==='logout'){
      this.router.navigate(['/auth/login'])
    }
  }

}