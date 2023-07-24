
import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/comman.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  users:any;



  constructor(private comman:CommanService){

  }
  ngOnInit(): void {
    this.load();



  }

  load(){
    this.comman.get('product').subscribe((result:any)=>{
      this.users = result;
      console.log(this.users);


     });


  }


  delete(id:number){


    // if(confirm("sure to delete")){
    //   this.comman.delete("/product"+ id).subscribe((result:any)=>{
    //     alert("record deleted");


    //   });
    // }
    if (confirm("sure to delete !") == true) {

      // this.comman.delete("/product"+ id).subscribe((result:any)=>{

      // });
      this.comman.delete("product/"+ id).subscribe((result:any)=>{
          console.log(result);
          this.load();

         });
      alert("record deleted");

    } else {
      alert("Record not deleted");
    }

  }

}
