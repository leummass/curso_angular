import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  
  constructor(private loginService: LoginService){

  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCkXxaVzaKwrLUVUuw5rYqAeglySiteBsE",
      authDomain: "listado-usuarios-4afbe.firebaseapp.com",
    })
  }
  isAuth(){
    return this.loginService.isAuth();
  }
  salir(){
    this.loginService.logout();
  }

}
