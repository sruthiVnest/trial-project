import { Routes } from '@angular/router';
import { QualityComponent } from './pages/quality/quality.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { IepBarChartComponent } from './lib/common/iep-bar-chart/iep-bar-chart.component';

export const routes: Routes = [{
    path:'',component:LoginComponent
},
{
path:'auth',
component:LayoutComponent,
children:[
{
    path:'dashboard',component:DashboardComponent
},
{
    path:'quality',component:QualityComponent
},
{
    path:'chart',component:IepBarChartComponent
}
]}
];
