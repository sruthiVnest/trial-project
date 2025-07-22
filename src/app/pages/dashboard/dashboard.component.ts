import { Component } from '@angular/core';
import { QualityComponent } from "../quality/quality.component";
import { KENDO_SWITCH } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { FormsModule } from '@angular/forms';
import { IepBarChartComponent } from '../../lib/common/iep-bar-chart/iep-bar-chart.component';
import {  CommonModule, NgIf } from '@angular/common';
import { KENDO_TABSTRIP, SelectEvent } from '@progress/kendo-angular-layout';
import { FilterContractsComponent } from '../filter-contracts/filter-contracts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ QualityComponent,KENDO_LABEL,KENDO_SWITCH,KENDO_TABSTRIP,FormsModule,CommonModule,FilterContractsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
public tabChart:boolean=true;
public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
