import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommanService } from 'src/app/comman.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formdata:any;
  id:any;


  constructor(private router:Router,private http:HttpClient,private comman:CommanService,private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id");
  }






  ngOnInit(): void {
    this.formdata = new FormGroup({
      title : new FormControl(""),
      description:new FormControl(""),
      category:new FormControl(""),
      price:new FormControl(""),
      mrp:new FormControl("")





    });

    if(this.id != null){
      this.comman.get("product/" +this.id).subscribe((result:any)=>{
        console.log(result);
        this.formdata.patchValue({
          title:result.title,
          description:result.description,
          category:result.category,
          price:result.price,
          mrp:result.mrp
        })

      })
    }

  }
  click(data:any){

    if(this.id == null){
      this.comman.post("product",data).subscribe((result:any)=>{
        console.log(result);
        this.router.navigate(["/admin/products"]);

      })
    }
    else{
      this.comman.put("product/"+this.id, data).subscribe((result:any)=>{
        console.log(result);
        this.router.navigate(["/admin/products"]);

      })
    }




  }


}
