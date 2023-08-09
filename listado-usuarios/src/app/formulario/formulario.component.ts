import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Usuario } from '../usuario.model';
import { LoggingService } from '../LoggingService.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput:string;
  apellidoInput:string;
  //@Output() usuarioCreado = new EventEmitter<Usuario>();
  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private usuariosService: UsuariosService
  ) {
    this.usuariosService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  agregarUsuario() {
    let usuarion = new Usuario(
      this.nombreInput,
      this.apellidoInput
    );
    this.usuariosService.usuarioAgregado(usuarion);
    //this.loggingService.enviarMensajeAConsola("Usuario nombre: "+ usuarion.nombre+" apellido: "+usuarion.apellido);
    //this.usuarioCreado.emit(usuarion);
  }
  eliminarUsuario() {
    //this.usuarios.pop();
    this.usuariosService.usuarioEliminado();
  }
}
