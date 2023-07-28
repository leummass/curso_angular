import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() usuarioCreado = new EventEmitter<Usuario>();

  nombreInput:string="sdf";
  apellidoInput:string="fsd";
  agregarUsuario(){
    let usuarion = new Usuario(this.nombreInput,this.apellidoInput);
    this.usuarioCreado.emit(usuarion);
    
  }
  eliminarUsuario(){
    //this.usuarios.pop();
  }
}
