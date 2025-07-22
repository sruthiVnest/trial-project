import { Component } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-iep-bar-chart',
  standalone: true,
  imports: [ChartsModule ],
  templateUrl: './iep-bar-chart.component.html',
  styleUrl: './iep-bar-chart.component.scss'
})
export class IepBarChartComponent {
 public seriesData: number[] = [1, 2, 3, 5];
}
