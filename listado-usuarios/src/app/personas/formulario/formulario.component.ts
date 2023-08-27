import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Usuario } from '../../usuario.model';
import { LoggingService } from '../../LoggingService.service';
import { UsuariosService } from '../../usuarios.service';
import { Router } from '@angular/router';

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
    private usuariosService: UsuariosService,
    private router:Router
  ) {
    this.usuariosService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  onGuardarUsuario() {
    let usuarion = new Usuario(
      this.nombreInput,
      this.apellidoInput
    );
    this.usuariosService.usuarioAgregado(usuarion);
    this.router.navigate(["personas"])
    //this.loggingService.enviarMensajeAConsola("Usuario nombre: "+ usuarion.nombre+" apellido: "+usuarion.apellido);
    //this.usuarioCreado.emit(usuarion);
  }
  eliminarUsuario() {
    //this.usuarios.pop();
    this.usuariosService.usuarioEliminado();
  }
}
