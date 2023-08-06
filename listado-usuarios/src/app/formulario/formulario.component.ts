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
  //@Output() usuarioCreado = new EventEmitter<Usuario>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private usuariosService: UsuariosService
  ) {}

  agregarUsuario() {
    let usuarion = new Usuario(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
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
