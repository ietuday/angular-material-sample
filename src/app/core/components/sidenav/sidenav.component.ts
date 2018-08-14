import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems = [{
    title: 'Dashboard',
    routeLink: '/dashboard',
    icon: 'dashboard'
  },
  {
    title: 'Students',
    routeLink: '/students',
    icon: 'mail'
  },
  {
    title: 'Users',
    routeLink: '/users',
    icon: 'people'
  },
  {
    title: 'Settings',
    routeLink: '/settings',
    icon: 'settings'
  }];

  selectedMenu = this.menuItems[1];

  constructor() { }

  ngOnInit() {
  }

}
