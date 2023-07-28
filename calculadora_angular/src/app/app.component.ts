import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='Aplicación de Calculadora';
  resultadoPadre: Number = 0;
  resultadoVal(resultadonum:Number){
    console.log('oppppp');
    this.resultadoPadre = resultadonum;
  }
}
