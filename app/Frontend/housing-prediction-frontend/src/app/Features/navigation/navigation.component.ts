import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navbarCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBarDropDown() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
