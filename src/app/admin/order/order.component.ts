import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/comman.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit  {

  getorders:any;


  constructor(private comman:CommanService){}


  ngOnInit(): void {
    this.comman.get("order").subscribe((result:any)=>{
      this.getorders = result;
      console.log(this.getorders);

    })

  }










}

