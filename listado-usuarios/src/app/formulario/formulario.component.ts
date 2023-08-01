import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() usuarioCreado = new EventEmitter<Usuario>();

  
  agregarUsuario(nombreInput: HTMLInputElement, apellidoInput:HTMLInputElement){
    let usuarion = new Usuario(nombreInput.value, apellidoInput.value);
    this.usuarioCreado.emit(usuarion);
    
  }
  eliminarUsuario(){
    //this.usuarios.pop();
  }
}
