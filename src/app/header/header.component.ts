import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  count = 0;

  ngOnInit(): void {
    let carts = JSON.parse(localStorage.getItem('cart') || '[]');
this.count = carts.length;

  }



}
