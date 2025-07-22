import { Component } from '@angular/core';
import { KENDO_MENUS } from '@progress/kendo-angular-menu';
import { DrawerItem, DrawerSelectEvent, LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { SVGIcon, menuIcon, inboxIcon, bellIcon, calendarIcon, envelopeLinkIcon, starOutlineIcon } from '@progress/kendo-svg-icons';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [  CommonModule,KENDO_MENUS,LayoutModule,ButtonsModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
 public selected = "Inbox";
  public menuSvg: SVGIcon = menuIcon;
constructor(private router: Router) {}
  public items: Array<DrawerItem> = [
    { text: "Inbox", svgIcon: inboxIcon, selected: true },
    { separator: true },
    { text: "Notifications", svgIcon: bellIcon },
    { text: "Calendar", svgIcon: calendarIcon },
    { separator: true },
    { text: "Attachments", svgIcon: envelopeLinkIcon },
    { text: "Favourites", svgIcon: starOutlineIcon },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }
}
