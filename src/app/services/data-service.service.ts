import { Injectable } from '@angular/core';
import { DataResult, orderBy, process, SortDescriptor } from '@progress/kendo-data-query';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  public products = [
    {
        ProjectID: 1,
        ActivityID:'(406) 555-0120',
        ActivityName: '6391 Elgin St.Celina',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '10 boxes x 20 bags',
        UnitPrice: 18.0,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft Fdrinks, coffees, teas, beers, and ales'
        }
    },
   {
        ProjectID: 1,
        ActivityID:'(406) 555-0120',
        ActivityName: '6391 Elgin St.Celina',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '24 - 12 oz bottles',
        UnitPrice: 19.0,
        UnitsInStock: 17,
        UnitsOnOrder: 40,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    }];
  public getProducts(
        skip: number,
        pageSize: number,
        sortDescriptor: SortDescriptor[],
        filterTerm: number | null
    ): Observable<DataResult> {
        let data;
        if (filterTerm) {
            data = process(orderBy(this.products, sortDescriptor), {
                filter: {
                    logic: 'and',
                    filters: [
                        {
                            field: 'CategoryID',
                            operator: 'eq',
                            value: filterTerm
                        }
                    ]
                }
            }).data;
        } else {
            data = orderBy(this.products, sortDescriptor);
            console.log(data);
        }
        return of({
            data: data.slice(skip, skip + pageSize),
            total: data.length
        });
    }
}
