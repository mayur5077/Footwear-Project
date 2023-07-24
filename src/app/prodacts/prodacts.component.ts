
import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-prodacts',
  templateUrl: './prodacts.component.html',
  styleUrls: ['./prodacts.component.css']
})
export class ProdactsComponent implements OnInit {

  users:any;


  constructor(private comman:CommanService){

  }
  ngOnInit(): void {
   this.comman.get('product').subscribe((result:any)=>{
    this.users = result;

   })

  }

}
