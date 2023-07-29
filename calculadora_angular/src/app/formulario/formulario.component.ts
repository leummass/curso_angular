import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  n1:number=5;
  n2:number=5;
  @Output() resultadoEvent = new EventEmitter<number>();
  
  suma(){
    let resultado=Number(this.n1+this.n2);
    this.resultadoEvent.emit(resultado);
  }
  resta(){
    let resultado=this.n1-this.n2;
    this.resultadoEvent.emit(resultado);
    
  }
  multiplicacion(){
    let resultado=this.n1*this.n2;
    this.resultadoEvent.emit(resultado);
  }
  division(){
    let resultado=this.n1/this.n2;
    this.resultadoEvent.emit(resultado);
  }
}
