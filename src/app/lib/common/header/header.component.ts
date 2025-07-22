import { Component } from '@angular/core';
import { IconsModule, KENDO_ICONS, SVGIcon } from "@progress/kendo-angular-icons";
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { bellIcon, menuIcon, userIcon ,questionCircleIcon  } from '@progress/kendo-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconsModule,NavigationModule,KENDO_ICONS, KENDO_INDICATORS, KENDO_LAYOUT],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menuIcon: SVGIcon = menuIcon;
  public bellIcon: SVGIcon = bellIcon;
  public userIcon: SVGIcon = userIcon;
  public questionCircleIcon:SVGIcon=questionCircleIcon;
}
