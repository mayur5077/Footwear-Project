
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommanService } from '../comman.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prodctdetels',
  templateUrl: './prodctdetels.component.html',
  styleUrls: ['./prodctdetels.component.css']
})
export class ProdctdetelsComponent implements OnInit {

  id:any;
  user:any;
  count = 0;
  step = 1;
  info:any =[];
  totalprice:any;






  dicriment(){
    this.count -= this.step;

  }
  incriment(){
    this.count += this.step;

  }

  addcart(){

    this.totalprice = (this.user.price*this.count);
    let demo = {
      title:this.user.titel,
      description:this.user.description,
      Category:this.user.Category,
      price:this.user.price,
      mrp:this.user.mrp,
      image:this.user.avatar,
      total:this.totalprice,
      quntity:this.count,
      id:this.user.id


    }
    this.info.push(demo);
    localStorage.setItem('cart',JSON.stringify(this.info));


  }




  constructor(private comman:CommanService, private route:ActivatedRoute ){
 this.id = route.snapshot.paramMap.get('id');





  }
  ngOnInit(): void {
    this.comman.get('product/'+ this.id).subscribe((result:any)=>{
     this.user = result;

    })

    if(localStorage.getItem("cart")!=null){
      this.info = JSON.parse(localStorage.getItem("cart")|| '[]');
    }





  }

}
