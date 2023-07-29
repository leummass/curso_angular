import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='Aplicación de Calculadora';
  resultadoPadre: number = 0;

  resultadoV(resultadonum:number){
    this.resultadoPadre = resultadonum;
  }
}
