import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent  {

  products = true;
  product = false;
  


  submit(){
    this.products = true;
    this.product = false;
  }

  unsubmit(){
    this.products = false;
    this.product = true;
  }




}
