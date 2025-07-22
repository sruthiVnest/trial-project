import { Component } from '@angular/core';
import { KENDO_TABSTRIP, SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-filter-contracts',
  standalone: true,
  imports: [KENDO_TABSTRIP],
  templateUrl: './filter-contracts.component.html',
  styleUrl: './filter-contracts.component.scss'
})
export class FilterContractsComponent {
public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
