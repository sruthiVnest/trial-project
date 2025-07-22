import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IepBarChartComponent } from './iep-bar-chart.component';

describe('IepBarChartComponent', () => {
  let component: IepBarChartComponent;
  let fixture: ComponentFixture<IepBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IepBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IepBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
