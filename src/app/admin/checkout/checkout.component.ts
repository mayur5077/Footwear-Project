import { formatDate } from '@angular/common';
import { APP_ID, Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommanService } from 'src/app/comman.service';


declare var Razorpay :any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  setcarts: any;
  item:any;
  producttotal:any;
  total:number=0;
  subtotal:any=0;
  discount= 45;
  fromdata:any;
  id:any;



  options = {
    "key": "rzp_live_Ay9af2dQeUH8A6",
    "amount": "200",
    "name": "Abhijit Gatade",
    "description": "Web Development",
    "image": "https://www.abhijitgatade.com/assets/img/favicon.png",
    "order_id":"",
    "handler": function (response: any){
        var event = new CustomEvent("payment.success",
            {
                detail: response,
                bubbles: true,
                cancelable: true
            }
        );
        window.dispatchEvent(event);

    }

    ,

    "prefill": {

    "name": "mayuresh patil",

    "email": "mayueshpatil@0204gmail.com",

    "contact": "9834126352"

    },

    "notes": {

    "address": ""

    },

    "theme": {

    "color": "#3399cc"

    }

    };

  constructor(private common:CommanService){}

  ngOnInit(): void {
    this.setcarts = JSON.parse(localStorage.getItem('cart') || '[]');
    // alert("setitem");
    console.log(this.setcarts);
    this.getcart();
    this.form();



  }
  form(){
    this.fromdata = new FormGroup({
      firstname:new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      phon: new FormControl(),
      pincode: new FormControl(),
      city: new FormControl(),
      state: new FormControl()



    })
  }
  clickbutton(data:any){
    data["product"]=this.setcarts;
    data["Status"]="pending";
    this.common.post("order",data).subscribe((result:any)=>{
      alert("order placed");
      this.id = result.id;
      console.log(this.id);
      this.options.amount = "200";
      this.options.prefill.name = data.firstname + " " + data.lastname;
      this.options.prefill.email =  data.email;
      this.options.prefill.contact =data.phon;
      var razorpay = new Razorpay(this.options);
      razorpay.open();
      razorpay.on('payment faild',(Response:any)=>{
        alert("payment faild");
      })



      console.log(this.options.prefill.name);



    })

    console.log(data);



    }

    @HostListener('window:payment.success', ['$event'])

    onPaymentSuccess(event: any): void {
      console.log("payment recevad");
      this.common.put("order/" + this.id, {Status:'paid'}).subscribe((result:any)=>{
        console.log("status updeted");
        console.log(result);


      })






    }







  getcart(){

    for(let i = 0;i<this.setcarts.length;i++){
      this.producttotal = this.setcarts[i].price* this.setcarts[i].quntity;
      this.subtotal += this.producttotal;
      this.total = this.subtotal - this.discount;
      console.log(this.subtotal);


    }






  }

}
