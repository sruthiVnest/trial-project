import { Component } from '@angular/core';
import { NavBarComponent } from '../lib/common/nav-bar/nav-bar.component';
import { HeaderComponent } from "../lib/common/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ HeaderComponent,NavBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
