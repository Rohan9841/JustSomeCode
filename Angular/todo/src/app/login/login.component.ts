import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "Rohan";
  password:string = "";
  errorMessage:string = "invalid username or password";
  validLogin:boolean = true;

  constructor(
    private router : Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.validLogin = true;
      this.router.navigate(["welcome",this.username]);
    }else{
      this.validLogin = false;
    }
  }
}
