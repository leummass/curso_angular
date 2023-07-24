import { Component } from '@angular/core';

@Component({
  selector: 'app-app-calculadora',
  templateUrl: './app-calculadora.component.html',
  styleUrls: ['./app-calculadora.component.css']
})
export class AppCalculadoraComponent {
  titulo='Aplicación de Calculadora';
  n1:number=0;
  n2:number=0;
  resultado=0;
  suma(){
    this.resultado=Number(this.n1)+Number(this.n2);
  }
  resta(){
    this.resultado=Number(this.n1)-Number(this.n2);
  }
  multiplicacion(){
    this.resultado=Number(this.n1)*Number(this.n2);
  }
  division(){
    this.resultado=Number(this.n1)/Number(this.n2);
  }
  
}
