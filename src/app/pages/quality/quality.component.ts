import { Component } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import {GridDataResult, KENDO_GRID, PageChangeEvent} from '@progress/kendo-angular-grid'
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { DataServiceService } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';
import { KENDO_SWITCH } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [CommonModule,FormsModule,KENDO_DATEINPUTS,KENDO_GRID ],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.scss'
})
export class QualityComponent {
  constructor(public service:DataServiceService){
    this.loadGridItems();
  }
  
 public gridItems: Observable<GridDataResult> | undefined;
    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: number | null = null;

     public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadGridItems();
    }

    public handleSortChange(descriptor: SortDescriptor[]): void {
        this.sortDescriptor = descriptor;
        this.loadGridItems();
    }

    private loadGridItems(): void {
        this.gridItems = 
        this.service.getProducts(
          this.skip,
          this.pageSize,
          this.sortDescriptor,
          this.filterTerm
        );
        console.log(this.gridItems);
    }
}
