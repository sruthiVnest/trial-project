import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterContractsComponent } from './filter-contracts.component';

describe('FilterContractsComponent', () => {
  let component: FilterContractsComponent;
  let fixture: ComponentFixture<FilterContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterContractsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
