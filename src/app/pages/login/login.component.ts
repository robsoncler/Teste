import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../public/models/admin'

import { LoginService } from '../../public/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin = new Admin;
  msgError = "";
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.loginService.loginSystem(this.admin)
    .subscribe(data => {
      this.router.navigate(['/dashboard'])
      // localStorage.setItem("user",data.name)
      // localStorage.setItem("email",data.email)
      console.log("localStorage: ",localStorage)

      console.log('retorn api data:', data);
    },error => {   this.msgError = error.error
      console.log('retorn api', error)})
  }
}
