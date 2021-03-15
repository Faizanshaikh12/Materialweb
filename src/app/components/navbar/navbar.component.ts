import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  onToolbarMenuToggle(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }

}