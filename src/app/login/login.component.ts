import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata:any;


  constructor(private route:Router){

  }

  




  ngOnInit(): void {
    this.formdata = new FormGroup({
      user: new FormControl(),
      password: new FormControl()


    })
  }

  click(data:any){

    if(data.user == "mayuresh" && data.password == "patil")
    {
      alert("welcome " + data.user);
      this.route.navigate(["/dashbord"]);



    }
    else{
      alert("pliz enter vaild ditelas");
    }



    console.log(data);

  }





}
