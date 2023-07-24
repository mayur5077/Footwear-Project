import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  setcarts: any;
  item:any;
  producttotal:any;
  total:number=0;
  subtotal:any=0;
  discount= 45;



  ngOnInit(): void {
    this.setcarts = JSON.parse(localStorage.getItem('cart') || '[]');
    // alert("setitem");
    console.log(this.setcarts);
    this.getcart();
  }
  dicriment(index: number) {
    if(this.setcarts[index].quntity>1){
      this.setcarts[index].quntity -= 1;
      this.setcarts[index].total =  this.setcarts[index].price * this.setcarts[index].quntity;


      localStorage.setItem('cart', JSON.stringify(this.setcarts));

    }

  }

  incriment(index: number) {
    this.setcarts[index].quntity += 1;
    this.setcarts[index].total =  this.setcarts[index].price * this.setcarts[index].quntity;

    localStorage.setItem('cart', JSON.stringify(this.setcarts));
  }

  remove(id: number) {
    this.setcarts = this.setcarts.filter((setcarts: any)=>{
      if (setcarts.id != id)
      return setcarts;
    });
    localStorage.setItem('cart', JSON.stringify(this.setcarts));
  }

  getcart(){

    for(let i = 0;i<this.setcarts.length;i++){
      this.producttotal = this.setcarts[i].price* this.setcarts[i].quntity;
      this.subtotal += this.producttotal;
      this.total = this.subtotal - this.discount
      console.log(this.subtotal);


    }





  }




}
