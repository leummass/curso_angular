import { Component } from '@angular/core';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoService } from '../ingreso/ingreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipo:string="ingresoOp";
  descripcionInput:string;
  valorInput:number;
  constructor(private egresoService:EgresoService, private ingresoService:IngresoService){}
  
  tipoOperacion(evento:any){
    this.tipo = evento.target.value;
  }
  agregarValor(){
    if(this.tipo==="ingresoOp"){
      this.ingresoService.agregar(new Ingreso(this.descripcionInput,this.valorInput));
    }
    else{
      this.egresoService.agregar(new Egreso(this.descripcionInput,this.valorInput));
    }
  }
}
