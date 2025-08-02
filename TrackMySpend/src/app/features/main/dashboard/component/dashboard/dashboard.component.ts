import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  imports: [NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartData = {
    labels: ['Food', 'Travel', 'Utilities'],
    datasets: [
      { data: [300, 500, 100], label: 'Expenses' }
    ]
  };
}