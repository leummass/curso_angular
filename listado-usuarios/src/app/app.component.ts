import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCkXxaVzaKwrLUVUuw5rYqAeglySiteBsE",
      authDomain: "listado-usuarios-4afbe.firebaseapp.com",
    })
  }

}
